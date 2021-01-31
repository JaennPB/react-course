import React, { Component } from 'react';
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

class Person extends Component {
  render() {
    console.log('[Person.js] rendering... Person');
    return (
      <div className={classes.Person}>
        <p>
          I am {this.props.name} and I am {this.props.age} years old
        </p>
        <input onChange={this.props.change} value={this.props.name} />
        <StyledBtn onClick={this.props.delete}>Delete</StyledBtn>
      </div>
    );
  }
}

export default Person;
