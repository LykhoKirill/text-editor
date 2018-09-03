import { handleActions } from "redux-actions";
import { stateSetter } from "Utils";
import * as actions from "./actions";

const initialState = {
    words: [],
};

export default handleActions({
    [actions.setSynonyms]: stateSetter("words"),
}, initialState);
