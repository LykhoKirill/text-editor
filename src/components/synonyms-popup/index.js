import React from "react";
import PropTypes from "prop-types";

import css from "./styles.css";

export default function SynonymsPopup({
    synonyms, handleSelectSynonym, handleCloseSynonymsPopup,
}) {
    return (
        <div className={css.popupWrapper}>
            <div className={css.title}>Select synonym</div>
            <div className={css.buttonsWrapper}>
                {
                    synonyms.map(({ word, score }) => (
                        <button
                            className={css.button}
                            key={`${score}`}
                            type="button"
                            onClick={() => handleSelectSynonym(word)}
                        >
                            {word}
                        </button>
                    ))
                }
            </div>
            <button
                type="button"
                className={css.closeButton}
                onClick={handleCloseSynonymsPopup}
            >
                Cancel
            </button>
        </div>
    );
}

SynonymsPopup.propTypes = {
    synonyms: PropTypes.arrayOf(PropTypes.shape({
        word: PropTypes.string,
        score: PropTypes.number,
    })).isRequired,
    handleSelectSynonym: PropTypes.func.isRequired,
    handleCloseSynonymsPopup: PropTypes.func.isRequired,
};
