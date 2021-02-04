import React, { Component } from 'react';
import styled from 'styled-components';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

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
      <React.Fragment>
        <WithClass classes={classes.Person}>
          <p>
            I am {this.props.name} and I am {this.props.age} years old
          </p>
          <input onChange={this.props.change} value={this.props.name} />
          <StyledBtn onClick={this.props.delete}>Delete</StyledBtn>
        </WithClass>
        <div>Adjecent JSX</div>
      </React.Fragment>
    );
    // react fragment is a HOC (higher order component and under the hood, it acts as a wrapping container for jsx, it will not render in the real DOM!)
  }
}

export default Person;
