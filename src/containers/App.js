import React, { Component } from "react";

import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App.js] constructor");
    }

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
        showPersons: false,
        showCockpit: true
    };

    static getDerivedStateFromProps(props, state) {
        console.log("[App.js] getDerivedStateFromProps", props);
        return state;
    }

    // componentWillMount() {
    //     console.log("[App.js] componentWillMount");
    // }

    componentDidMount() {
        console.log("[App.js] componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[App.js] shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("[App.js] componentDidUpdate");
    }

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
        console.log("[App.js] render");
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
            <WithClass classes={classes.App}>
                <button
                    onClick={() => {
                        this.setState({ showCockpit: !this.state.showCockpit });
                    }}
                >
                    Remove Cockpit
                </button>
                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle}
                        showPerson={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this._TogglePersonHandler}
                    />
                ) : null}
                {persons}
            </WithClass>
        );
    }
}

export default App;

// ---   IMPORTANT NOTE   ---
// () => inefficient way to call function handler
// .bind(this, arg) is an efficient way to call function
