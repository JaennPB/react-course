import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

// component must always return JSX or somethig to render
// class based component
class App extends Component {
  // property object 'state' can only be accessed in class based components
  state = {
    // !!! changes to state trigger UI update !!!
    persons: [
      { name: "Jaenn", age: 25 },
      { name: "Phoebe", age: 4 },
      { name: "Pau", age: 24 },
    ],
    otherProp: "will be left untouched",
  };

  switchNameHandler = () => {
    // console.log("was clicked");
    // DON'T DO THIS: this.state.persons[0].name = 'Jay'
    this.setState({
      // will merge only changed values with state
      persons: [
        { name: "Jay", age: 25 },
        { name: "Phoebe", age: 4 },
        { name: "Pau", age: 25 },
      ],
    });
  };

  render() {
    return (
      // tipicaly everything that should be rendered PER component should be inside it
      <div className="App">
        <h1>Hi, I am a React app</h1>
        <p>this is really working!</p>
        <button onClick={this.switchNameHandler}>Change names</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
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
        />
      </div>
    );
    // *** this is what the JSX above will be compiled to
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "Does this work now?")
    // );
  }
}

// react listens for changes in STATE and PROPS, they will TRIGGER a RENDER or 'react' to changes made, and will update UI accordingly
export default App;
