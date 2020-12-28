import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person.js";

const App = (props) => {
  // useState is used in functional components, use methods are called hooks
  // useState() returns two values/elements (currentState, modifiedState)
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Jaenn", age: 25 },
      { name: "Phoebe", age: 4 },
      { name: "Pau", age: 24 },
    ],
    otherProp: "will be left untouched",
  });

  const switchNameHandler = () => {
    setPersonsState({
      // will merge only changed values with state
      // will trigger UI update
      persons: [
        { name: "Jay", age: 25 },
        { name: "Phoebe", age: 4 },
        { name: "Pau", age: 25 },
      ],
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
