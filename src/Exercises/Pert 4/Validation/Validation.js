import React from "react";

export default function Validatiion(props) {
    let validationMessage = "Text long enough!";

    if (props.inputLength <= 5) {
        validationMessage = "Text too short!";
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
}
