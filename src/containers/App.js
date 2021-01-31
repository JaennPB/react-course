import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    // !!! changes to state trigger UI update !!!
    persons: [
      { key: '1a', name: 'Jaenn', age: 25 },
      { key: '2b', name: 'Phoebe', age: 4 },
      { key: '3c', name: 'Pau', age: 24 },
    ],
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

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
    // instead, create a copy (or spread values into new array)
    // const items = this.state.persons;
    const items = [...this.state.persons];
    items.splice(personIndex, 1);
    this.setState({ persons: items });
  };

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // ========== update lifecycles

  shouldComponentUpdate(nextProps, NextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  render() {
    // everytime there is a change in state or props, caused by handlers, render() re-runs everytime, causing all inside of it to also run
    // this is why we can dinamically change classes, styles, innet texts, etc.
    // it REACTS!

    console.log('[App.js] render()');

    let persons = null;

    if (this.state.showPersons) {
      // logic has now been delegated to its own component Persons, which renders each Person component
      // this is BEST PRACTICE: render() in App container should be kept as clean as possible
      persons = (
        <Persons
          persons={this.state.persons}
          delete={this.deletePersonHandler}
          change={this.changeNameHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          toggle={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
