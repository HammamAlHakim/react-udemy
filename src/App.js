import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {
                id: "buasdf",
                name: "Max",
                age: 28
            },
            {
                id: "bsdvno",
                name: "Manu",
                age: 29
            },
            {
                id: "nviwru",
                name: "Stephanie",
                age: 26
            }
        ],
        otherState: "some other state",
        showPersons: false
    };

    _nameChangeHandler = (e, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = { ...this.state.persons[personIndex] };

        // const person = Object.assign({}, this.state.persons[personIndex])

        person.name = e.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    };

    _togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    };

    _deletePersonHandler = personIndex => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(persons, 1);
        this.setState({ persons: persons });
    };

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this._deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={event =>
                                    this._nameChangeHandler(event, person.id)
                                }
                            />
                        );
                    })}
                </div>
            );
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push("red"); // classes = ["red"]
        }
        if (this.state.persons.length <= 1) {
            classes.push("bold"); // classes = ["red", "bold"]
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(" ")}>This is really working!</p>
                <button className="button" onClick={this._togglePersonHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
        // ---   IMPORTANT NOTE   ---
        // () => inefficient way to call function handler
        // .bind(this, arg) is an efficient way to call function
    }
}

export default App;
