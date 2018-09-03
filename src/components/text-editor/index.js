import React from "react";
import PropTypes from "prop-types";
import css from "./styles.css";

export default function TextEditor({ handleCheckStyles }) {
    return (
        <div
            contentEditable
            className={css.textEditor}
            id="textEditor"
            onMouseUp={handleCheckStyles}
        />
    );
}

TextEditor.propTypes = {
    handleCheckStyles: PropTypes.func.isRequired,
};
