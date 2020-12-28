import React from "react";

// at the most basic level, a react component is a js function that returns JSX (html) code which we want to render
// JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

// functional component
// props is a React object that gives us access to attributes passed in App

// this is also called a stateless component, its good practice to have more stateless components than stateful components
// so that the logic of the app can live in a few stateful components rather than been broken into small pieces all over the place
const Person = (props) => {
  return (
    <div>
      {/* passing method references between components as props, so that a component that doesnt have access to the state or a certain method, can change the state from outside or access certain methods */}
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old
      </p>
      {/* !!! props also trigger a UI render !!! */}
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name} /* setting up two way binding */
      />
    </div>
  );
};

export default Person;

// A typical React app therefore could be depicted as a component tree - having one root component ("App") and then an potentially infinite amount of nested child components.
