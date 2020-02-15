import React, { useState, Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
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
        ],
        otherState: "some other state",
        showPerson: false
    };

    _switchNameHandler = newName => {
        this.setState({
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

    _nameChangeHandler = e => {
        this.setState({
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

    _togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({
            showPerson: !doesShow
        });
    };

    render() {
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer"
        };

        let persons = null;

        if (this.state.showPerson) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this._switchNameHandler.bind(this, "Max!")}
                        changed={this._nameChangeHandler}
                    >
                        My Hobbies: Racing
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                    />
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                {/* () => inefficient way to call function handler */}
                <button onClick={this._togglePersonHandler} style={style}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
