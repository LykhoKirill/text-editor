import React from "react";
import PropTypes from "prop-types";

import SynonymsPopup from "Containers/synonyms-popup";

export default function PopupsWrapper({ openedPopups }) {
    return (
        <div>
            { openedPopups.includes("synonyms") && <SynonymsPopup />}
        </div>
    );
}

PopupsWrapper.propTypes = {
    openedPopups: PropTypes.arrayOf(PropTypes.string).isRequired,
};
