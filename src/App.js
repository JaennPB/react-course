import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    // !!! changes to state trigger UI update !!!
    persons: [
      { name: "Jaenn", age: 25 },
      { name: "Phoebe", age: 4 },
      { name: "Pau", age: 24 },
    ],
    showPersons: false,
  };

  switchNameHandler = (name) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Jay'
    this.setState({
      // will merge only changed values with state
      persons: [
        { name: name, age: 25 },
        { name: "Phoebe", age: 4 },
        { name: "Pau", age: 25 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  };

  changeNameHandler = (e) => {
    this.setState({
      // will merge only changed values with state
      persons: [
        { name: e.target.value, age: 25 },
        { name: "Phoebe", age: 4 },
        { name: "Pau", age: 24 },
      ],
    });
  };

  render() {
    // adding in-line styling to specific dom element
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      // tipicaly everything that should be rendered PER component should be inside it
      <div className="App">
        <h1>Hi, I am a React app</h1>
        <p>this is really working!</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Show list
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              changed={this.changeNameHandler}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            >
              {/* 'children' can be more html or plain text */} (is a cat)
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              // passing method references between components as props and using bind so that we can call certain method with specified argument
              click={this.switchNameHandler.bind(this, "JAY!!!")}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
