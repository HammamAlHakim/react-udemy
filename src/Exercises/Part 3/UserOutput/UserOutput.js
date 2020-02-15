import React from "react";

import "./UserOutput.css";

export default function UserOutput(props) {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>I hope I'll be overwritten!</p>
        </div>
    );
}
