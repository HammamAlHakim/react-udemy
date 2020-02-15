import React from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <p>This is really working!</p>
            <Person />
            <Person />
            <Person />
        </div>
    );
}

export default App;
