import React, { Component } from "react";

import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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

    _NameChangeHandler = (e, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // const person = Object.assign({}, this.state.persons[personIndex])
        const person = { ...this.state.persons[personIndex] };

        person.name = e.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    };

    _TogglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    };

    _DeletePersonHandler = personIndex => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this._DeletePersonHandler}
                    changed={this._NameChangeHandler}
                />
            );
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    showPerson={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this._TogglePersonHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;

// ---   IMPORTANT NOTE   ---
// () => inefficient way to call function handler
// .bind(this, arg) is an efficient way to call function
