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
        showPerson: false
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
        const doesShow = this.state.showPerson;
        this.setState({
            showPerson: !doesShow
        });
    };

    _deletePersonHandler = personIndex => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(persons, 1);
        this.setState({ persons: persons });
    };

    render() {
        const style = {
            backgroundColor: "green",
            color: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
            transition: ".3s"
        };

        let persons = null;

        if (this.state.showPerson) {
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

            style.backgroundColor = "red";
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this._togglePersonHandler} style={style}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
        // IMPORTANT NOTE
        // () => inefficient way to call function handler
        // .bind(this, arg) is an efficient way to call function
    }
}

export default App;
