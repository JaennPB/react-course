import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = (props) => {
  const style = {
    '@media only screen and (max-width: 900px)': {
      backgroundColor: 'lightblue',
    },
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old
      </p>
      <input onChange={props.change} value={props.name} />
      <button onClick={props.delete}>Delete</button>
    </div>
  );
};

export default Radium(Person);
