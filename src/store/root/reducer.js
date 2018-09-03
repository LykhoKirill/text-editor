import { combineReducers } from "redux";
import synonyms from "Store/synonyms/reducer";
import popups from "Store/popups/reducer";
import textEditor from "Store/text-editor/reducer";

export default combineReducers({
    synonyms,
    popups,
    textEditor,
});
