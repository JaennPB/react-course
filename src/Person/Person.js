import React from "react";

// at the most basic level, a react component is a js function that returns JSX (html) code which we want to render
// JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

// functional component
// props is a React object that gives us access to attributes passed in App
const Person = (props) => {
  return (
    <div>
      <p>
        I am {props.name} and I am {props.age} years old
      </p>
      {/* !!! props also trigger a UI render !!! */}
      <span>{props.children}</span>
    </div>
  );
};

export default Person;

// A typical React app therefore could be depicted as a component tree - having one root component ("App") and then an potentially infinite amount of nested child components.
