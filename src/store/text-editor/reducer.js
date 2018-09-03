import { handleActions } from "redux-actions";
import { stateSetter } from "Utils";
import * as actions from "./actions";

const initialState = {
    currentStyles: [],
};

export default handleActions({
    [actions.setCurrentStyles]: stateSetter("currentStyles"),
}, initialState);
