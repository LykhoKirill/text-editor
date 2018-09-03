import { connect } from "react-redux";
import StyleButton from "Components/style-button";
import { handleStyleButtonClick } from "Sagas/control-panel/actions";

const mapDispatchToProps = dispatch => ({
    handleClick: type => dispatch(handleStyleButtonClick(type)),
});

export default connect(null, mapDispatchToProps)(StyleButton);
