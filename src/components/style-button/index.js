import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import css from "./styles.css";

export default function StyleButton({
    styleType, handleClick, children, isActive,
}) {
    const text = children.length > 1 ? children[0] : children;
    return (
        <button
            type="button"
            onClick={handleClick.bind(null, styleType)}
            className={cx(css.button, { [css.active]: isActive })}
        >
            {text}
        </button>
    );
}

StyleButton.propTypes = {
    styleType: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
};
