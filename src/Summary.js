import React from "react";

export function Summary(props) {
    props.name = `Name: ${props.name}`;
    if (props.name.length >= 4) {
        return <React.Fragment>
            <td>{ props.index + 1 }</td>
            <td>{ props.name }</td>
            <td>{ props.name.length }</td>
        </React.Fragment>
    }else {
        return null;
    }
}
