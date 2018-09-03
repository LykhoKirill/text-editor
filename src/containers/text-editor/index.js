import { connect } from "react-redux";
import TextEditor from "Components/text-editor";
import { handleCheckStyles } from "Sagas/control-panel/actions";

const mapDispatchToProps = dispatch => ({
    handleCheckStyles: () => dispatch(handleCheckStyles()),
});

export default connect(null, mapDispatchToProps)(TextEditor);
