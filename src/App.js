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

    _deletePersonHandler = personIndex => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(persons, 1);
        this.setState({ persons: persons });
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
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this._deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                            />
                        );
                    })}
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
                {/* .bind(this, arg) is an efficient way to call function */}
            </div>
        );
    }
}

export default App;
