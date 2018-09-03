import {
    fork, take, call, put, race,
} from "redux-saga/effects";

import {
    setStyling,
    getSelectedWord,
    replaceSelectedWord,
    getCurrentStyles,
} from "Core";

import { getSynonyms } from "Api";
import { setSynonyms } from "Store/synonyms/actions";
import { showPopup, hidePopup } from "Store/popups/actions";
import { popups } from "Store/popups/constants";
import { setCurrentStyles } from "Store/text-editor/actions";
import {
    handleStyleButtonClick,
    handleSynonymsButtonClick,
    handleCloseSynonymsPopup,
    handleSelectSynonym,
    handleCheckStyles,
} from "./actions";

function* styleButtonClickHandler() {
    while (true) {
        const { payload: styleType } = yield take(handleStyleButtonClick);
        setStyling(styleType);
    }
}

function showSearchSymbolErrorPopup() {
    alert("For search synonym please select only word");
}

function* showReplaceWordWithSynonymPopup() {
    yield put(showPopup(popups.synonyms));
    const { synonymAction, closePopup } = yield race({
        synonymAction: take(handleSelectSynonym),
        closePopup: take(handleCloseSynonymsPopup),
    });

    if (closePopup) {
        yield put(hidePopup(popups.synonyms));
        return;
    }

    const { payload: synonym } = synonymAction;

    replaceSelectedWord(synonym);
    yield put(hidePopup(popups.synonyms));
}

function* synonymsButtonClickHandler() {
    let skipWaitingForSynonymsButtonClick = false;
    while (true) {
        if (!skipWaitingForSynonymsButtonClick) {
            yield take(handleSynonymsButtonClick);
        }
        skipWaitingForSynonymsButtonClick = false;
        const word = getSelectedWord();
        if (!word) {
            showSearchSymbolErrorPopup();
            continue // eslint-disable-line 
        }
        const synonyms = yield call(getSynonyms, word);
        yield put(setSynonyms(synonyms));
        const { research } = yield race({
            research: take(handleSynonymsButtonClick),
            _: call(showReplaceWordWithSynonymPopup),
        });

        if (research) {
            skipWaitingForSynonymsButtonClick = true;
            continue // eslint-disable-line
        }
    }
}

function* checkStylesHandler() {
    while (true) {
        yield take(handleCheckStyles);
        const currentStyles = getCurrentStyles() || [];
        yield put(setCurrentStyles(currentStyles));
    }
}

export default function* controlPanelSaga() {
    yield fork(styleButtonClickHandler);
    yield fork(synonymsButtonClickHandler);
    yield fork(checkStylesHandler);
}
