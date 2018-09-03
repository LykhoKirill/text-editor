import { connect } from "react-redux";
import ControlPanel from "Components/control-panel";
import { selectCurrentStyles } from "Selectors";

const mapStateToProps = state => ({
    currentStyles: selectCurrentStyles(state),
});

export default connect(mapStateToProps, null)(ControlPanel);
