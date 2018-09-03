import React from "react";
import PropTypes from "prop-types";

import css from "./styles.css";

export default function SynonymsButton({ handleClick }) {
    return (
        <button
            className={css.synonymsButton}
            type="button"
            onClick={handleClick}
        >
            Search synonyms
        </button>
    );
}

SynonymsButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
};
