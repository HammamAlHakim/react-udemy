import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {
                name: "Max",
                age: 28
            },
            {
                name: "Manu",
                age: 29
            },
            {
                name: "Stephanie",
                age: 26
            }
        ]
    });

    const [otherState, setOtherState] = useState("some other value");

    // console.log(personsState, otherState);

    const switchNameHandler = newName => {
        setPersonsState({
            persons: [
                {
                    name: newName,
                    age: 28
                },
                {
                    name: "Manu",
                    age: 29
                },
                {
                    name: "Stephanie",
                    age: 27
                }
            ]
        });
    };

    const nameChangeHandler = e => {
        setPersonsState({
            persons: [
                {
                    name: "max",
                    age: 28
                },
                {
                    name: e.target.value,
                    age: 29
                },
                {
                    name: "Stephanie",
                    age: 27
                }
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            {/* () => inefficient way to call function handler */}
            <button onClick={() => switchNameHandler("Maximilian!!")}>
                Switch Name
            </button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
            {/* .bind(this, arg) is an efficient way to call function */}
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                click={switchNameHandler.bind(this, "Max!")}
                changed={nameChangeHandler}
            >
                My Hobbies: Racing
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            />
        </div>
    );
};

export default App;
