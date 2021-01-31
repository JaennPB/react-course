import React from 'react';
import styled from 'styled-components';
import classes from './Person.css';

// styled-components return a react component, so the component that you want to style must be wrapped inside this newly created component
const StyledBtn = styled.button`
  padding: 3px 9px;
  border: 1px solid black;
  background-color: #aaa;
  outline: none;
  margin: 5px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

const Person = (props) => {
  console.log('[Person.js] rendering...');
  return (
    <div className={classes.Person}>
      <p>
        I am {props.name} and I am {props.age} years old
      </p>
      <input onChange={props.change} value={props.name} />
      <StyledBtn onClick={props.delete}>Delete</StyledBtn>
    </div>
  );
};

export default Person;
