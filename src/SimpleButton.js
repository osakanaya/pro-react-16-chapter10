import React from "react";
import PropTypes from "prop-types";

export function SimpleButton(props) {
    return (
        <button onClick={ props.callback } className={ props.className }
            disabled={ props.disabled === "true" || props.diabled === true }>
            { props.text }
        </button>
    );
}

