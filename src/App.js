import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    // !!! changes to state trigger UI update !!!
    persons: [
      { key: "1a", name: "Jaenn", age: 25 },
      { key: "2b", name: "Phoebe", age: 4 },
      { key: "3c", name: "Pau", age: 24 },
    ],
    showPersons: false,
  };

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  };

  deletePersonHandler = (personIndex) => {
    // it is bad practice tu mutate an object, because they are reference types
    // isntead, create a copy (or spread values into new array)
    // const items = this.state.persons;
    const items = [...this.state.persons];
    items.splice(personIndex, 1);
    this.setState({ persons: items });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    // rendering elements conditionaly via 'the javascript way'
    // everytime there is a render, a change in state or props, the whole render function runs from top to bottom
    // this is why this WORKS, then we just output the variable containing JSX into the return part of the render()
    if (this.state.showPersons) {
      persons = (
        // using map to render lists (arrays dinamically), becuase react is ALL javascript, we can use normal js syntax to conditionally render stuff
        // for each person, return JSX from <Person /> component using props dinamically, and storing them in 'person' variable to them render in 'return'
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                // using arrow funtion so that the function does not immediately run. instead, we are passing a reference of the method
                delete={() => this.deletePersonHandler(index)}
                key={person.key}
              />
            );
          })}
        </div>
      );
    }

    return (
      // tipicaly everything that should be rendered PER component should be inside it
      <div className="App">
        <h1>Hi, I am a React app</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Show list
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
