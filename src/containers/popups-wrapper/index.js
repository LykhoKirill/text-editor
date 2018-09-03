import { connect } from "react-redux";
import PopupsWrapper from "Components/popups-wrapper";
import { selectOpenedPopups } from "Selectors";

const mapStateToProps = state => ({
    openedPopups: selectOpenedPopups(state),
});

export default connect(mapStateToProps, null)(PopupsWrapper);
