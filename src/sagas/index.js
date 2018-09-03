import { fork } from "redux-saga/effects";

import controlPanelSaga from "./control-panel";

export default function* rootSaga() {
    yield fork(controlPanelSaga);
}
