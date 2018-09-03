import { handleActions } from "redux-actions";
import { equals, reject } from "ramda";
import * as actions from "./actions";

const initialState = {
    openedPopups: [],
};

export default handleActions({
    [actions.showPopup]: (state, { payload: popupName }) => ({
        ...state, openedPopups: [...state.openedPopups, popupName],
    }),
    [actions.hidePopup]: (state, { payload: popupName }) => ({
        ...state, openedPopups: reject(equals(popupName), state.openedPopups),
    }),
}, initialState);
