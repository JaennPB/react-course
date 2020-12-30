import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old
      </p>
      <input onChange={props.change} value={props.name} />
      <button onClick={props.delete}>Delete</button>
    </div>
  );
};

export default Person;
