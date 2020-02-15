import React, { Component } from "react";
import "../App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

export class App extends Component {
    state = {
        username: "Supermax"
    };

    _usernameChangedHandler = e => {
        this.setState({
            username: e.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Part 3 Exercise</h1>
                <UserInput
                    changed={this._usernameChangedHandler}
                    currentName={this.state.username}
                />
                <UserOutput userName={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName="Max" />
            </div>
        );
    }
}

export default App;
