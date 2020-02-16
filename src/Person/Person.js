import React from "react";

import classes from "./Person.module.css";

const Person = props => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>
                I'am {props.name} and I am {props.age}
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default Person;
