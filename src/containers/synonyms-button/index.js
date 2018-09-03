import { connect } from "react-redux";
import SynonymsButton from "Components/synonyms-button";
import { handleSynonymsButtonClick } from "Sagas/control-panel/actions";

const mapDispatchToProps = dispatch => ({
    handleClick: () => dispatch(handleSynonymsButtonClick()),
});

export default connect(null, mapDispatchToProps)(SynonymsButton);
