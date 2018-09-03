import { connect } from "react-redux";
import SynonymsPopup from "Components/synonyms-popup";
import { selectSynonymWords } from "Selectors";
import { handleSelectSynonym, handleCloseSynonymsPopup } from "Sagas/control-panel/actions";

const mapStateToProps = state => ({
    synonyms: selectSynonymWords(state),
});

const mapDispatchToProps = dispatch => ({
    handleSelectSynonym: word => dispatch(handleSelectSynonym(word)),
    handleCloseSynonymsPopup: () => dispatch(handleCloseSynonymsPopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SynonymsPopup);
