import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person.js";

// use state can take anything as value, an object (most commonly used), a string, a boolean, an array, etc.

const App = (props) => {
  // useState is used in functional components, use methods are called hooks
  // useState() returns two values/elements (currentState, modifiedState)
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Jaenn", age: 25 },
      { name: "Phoebe", age: 4 },
      { name: "Pau", age: 24 },
    ],
  });

  // in functional components, 'hooks' can be used multiple times, like useState() to set/split different parts of the state
  const [otherState, setOtherState] = useState({
    otherProp: "other state",
  });

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      // in functinal components useState() actually REPLACES states, unlike setState() from class based components where it is only merged
      // will trigger UI update
      persons: [
        { name: "Jay", age: 25 },
        { name: "Phoebe", age: 4 },
        { name: "Pau", age: 25 },
      ],
      // can also be set manually, or create a new useState()
      // otherProp: "other state",
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am a React app</h1>
      <p>this is really working!</p>
      <button onClick={switchNameHandler}>Change names</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        (is a cat)
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

// react listens for changes in STATE and PROPS, they will TRIGGER a RENDER or 'react' to changes made, and will update UI accordingly
export default App;
