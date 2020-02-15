import React from "react";

export default function UserInput(props) {
    const inputStyle = {
        border: "2px solid red"
    };

    return (
        <input
            type="text"
            onChange={props.changed}
            value={props.currentName}
            style={inputStyle}
        />
    );
}
