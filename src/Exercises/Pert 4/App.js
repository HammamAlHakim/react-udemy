import React, { Component } from "react";
import "../../App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

export class App extends Component {
    state = {
        userInput: ""
    };

    _inputChangeHandler = e => {
        this.setState({ userInput: e.target.value });
    };

    _deleteCharHandler = index => {
        const text = this.state.userInput.split("");
        text.splice(index, 1);

        const updatedText = text.join("");
        this.setState({ userInput: updatedText });
    };

    render() {
        const charList = this.state.userInput.split("").map((ch, index) => {
            return (
                <Char
                    character={ch}
                    key={index}
                    clicked={() => this._deleteCharHandler(index)}
                />
            );
        });

        return (
            <div className="App">
                <h1>Exercises Part 4</h1>
                <br />
                <input
                    type="text"
                    onChange={this._inputChangeHandler}
                    value={this.state.userInput}
                />
                <p>{this.state.userInput}</p>
                <Validation inputLength={this.state.userInput.length} />
                {charList}
            </div>
        );
    }
}

export default App;
