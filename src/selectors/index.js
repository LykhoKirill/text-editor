import { createSelector } from "reselect";
import { prop } from "ramda";

export const selectSynonyms = state => state.synonyms;
export const createSynonymsSelector = createSelector.bind(null, selectSynonyms);
export const selectSynonymWords = createSynonymsSelector(synonyms => prop("words", synonyms));

export const selectPopups = state => state.popups;
export const createPopupsSelector = createSelector.bind(null, selectPopups);
export const selectOpenedPopups = createPopupsSelector(popups => prop("openedPopups", popups));

export const selectTextEditor = state => state.textEditor;
export const createTextEditorSelector = createSelector.bind(null, selectTextEditor);
export const selectCurrentStyles = createTextEditorSelector(textEditor => prop("currentStyles", textEditor));
