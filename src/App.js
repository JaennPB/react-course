import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person.js';

// because styled.button will return a react component, and we are using `template literals` we can pass conditions
// StyledBtn2 is, basically, a react component, so it can receive props, which we can use for our conditions
// below, based on props.ifColorSwap = if(this.state.showPersons) is true or false, return either 'red' or 'limegreen'
const StyledBtn2 = styled.button`
  background-color: ${(props) => (props.ifColorSwap ? 'red' : 'limegreen')};
  color: white;
  font: inherit;
  border: 1px solid green;
  padding: 8px;
  cursor: pointer;
  outline: none;
  transition: all 0.15s;
  cursor: poiner;

  &:hover {
    transform: translateY(-2px);
    background-color: ${(props) => (props.ifColorSwap ? 'salmon' : 'lime')};
  }

  &:active {
    transform: translateY(-1px);
  }
`;

class App extends Component {
  state = {
    // !!! changes to state trigger UI update !!!
    persons: [
      { key: '1a', name: 'Jaenn', age: 25 },
      { key: '2b', name: 'Phoebe', age: 4 },
      { key: '3c', name: 'Pau', age: 24 },
    ],
    showPersons: false,
  };

  changeNameHandler = (event, key) => {
    // findng index of person from event listener
    const personIndex = this.state.persons.findIndex((p) => {
      return p.key === key;
    });

    // getting specific object of properties from specified person
    const person = {
      ...this.state.persons[personIndex],
    };

    // changing person.name from object
    person.name = event.target.value;

    // getting array of persons from state object
    const personsArr = [...this.state.persons];
    // setting created person to original persons array from state
    personsArr[personIndex] = person;

    // updating state persons array with new array
    this.setState({ persons: personsArr });
  };

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  };

  deletePersonHandler = (personIndex) => {
    // it is bad practice tu mutate an object, because they are reference types
    // isntead, create a copy (or spread values into new array)
    // const items = this.state.persons;
    const items = [...this.state.persons];
    items.splice(personIndex, 1);
    this.setState({ persons: items });
  };

  render() {
    // everytime there is a change in state or props, caused by handlers, render() re-runs everytime, causing all inside of it to also run
    // this is why we can dinamically change classes, styles, innet texts, etc.

    let persons = null;

    // rendering elements conditionaly via 'the javascript way'
    // everytime there is a render, a change in state or props, the whole render function runs from top to bottom
    // this is why this WORKS, then we just output the variable containing JSX into the return part of the render()
    if (this.state.showPersons) {
      persons = (
        // using map to render lists (arrays dinamically), becuase react is ALL javascript, we can use normal js syntax to conditionally render stuff
        // for each person, return JSX from <Person /> component using props dinamically, and storing them in 'person' variable to them render in 'return'
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                // using arrow funtion so that the function does not immediately run. instead, we are passing a reference of the method
                delete={() => this.deletePersonHandler(index)}
                key={person.key}
                change={(event) => this.changeNameHandler(event, person.key)}
              />
            );
          })}
        </div>
      );
    }

    // adding classes dinamically to empty array so that we can pass stringified items as a class
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    if (this.state.persons.length >= 3) {
      classes.push('invisible');
    }

    return (
      <div className="App">
        <h1>Hi, I am a React app</h1>
        <p className={classes.join(' ')}>
          {this.state.persons.length === 0
            ? 'You have deleted all users'
            : 'You are deleting users'}
        </p>
        <StyledBtn2
          ifColorSwap={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Show list
        </StyledBtn2>
        {persons}
      </div>
    );
  }
}

export default App;
