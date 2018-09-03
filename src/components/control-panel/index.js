import React from "react";
import PropTypes from "prop-types";
import StyleButton from "Containers/style-button";
import SynonymsButton from "Containers/synonyms-button";
import { styleTypes } from "Utils/constants";

import css from "./styles.css";

const checkIsActiveCreator = styles => style => styles.includes(style);

export default function ControlPanel({ currentStyles }) {
    const checkIsActive = checkIsActiveCreator(currentStyles);
    return (
        <div className={css.controlPanelWrapper}>
            <StyleButton isActive={checkIsActive("B")} styleType={styleTypes.bold}>B</StyleButton>
            <StyleButton isActive={checkIsActive("I")} styleType={styleTypes.italic}>I</StyleButton>
            <StyleButton isActive={checkIsActive("U")} styleType={styleTypes.underline}>U</StyleButton>
            <SynonymsButton />
        </div>
    );
}

ControlPanel.propTypes = {
    currentStyles: PropTypes.array.isRequired, //eslint-disable-line
};
