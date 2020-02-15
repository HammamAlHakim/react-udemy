import React from "react";

export default function Person(props) {
    return (
        <div>
            <p onClick={props.click}>
                I'am {props.name} and I am {props.age}
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}
