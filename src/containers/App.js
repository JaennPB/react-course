// *************************************************
// react
import React, { Component } from 'react';

// *************************************************
// css modules
import classes from './App.css';

// *************************************************
// component imports
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// *************************************************
// hocs
import withAddedClass from '../hoc/withAddedClass';

// *************************************************
// main App component (class component)
class App extends Component {
  // ==================================
  // constructor runs first (lifecycle hook)
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  // ==================================
  // state
  state = {
    // !!! changes to state trigger UI update !!!
    persons: [
      { key: '1a', name: 'Jaenn', age: 25 },
      { key: '2b', name: 'Phoebe', age: 4 },
      { key: '3c', name: 'Pau', age: 24 },
    ],
    showPersons: false,
    showCockpit: true,
    clickCounter: 0,
    isAuthenticated: false,
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
    // if updating the state requires the use of the previous/old state, this is the recomended way of doing it
    // by passing a fuction with prevState and returning 'NEW' state
    this.setState((prevState, props) => {
      return {
        persons: personsArr,
        clickCounter: prevState.clickCounter + 1,
      };
    });
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

  authenticationHandler = () => {
    this.setState({ isAuthenticated: true });
  };

  // =================================
  // component lifecycles hooks

  // mounting methods
  componentDidMount() {
    // runs AFTER App component has finished loading in the dom (after render())
    // this is a good place to add all your eventListeners, http requests
    console.log('[App.js] componentDidMount');
  }

  // updating methods
  shouldComponentUpdate(nextProps, NextState) {
    // runs BEFORE a component re-renders by a change of props or state
    // if true is returned it will re-render, if false is returned, it will not re-render
    // is a great place to improve the performance of a component because it can help to prevent unnecessary re-rendering
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    // runs after component has finished loading in the DOM (after render())
    // similar to componentDidMount, great palce to make API requests
    console.log('[App.js] componentDidUpdate');
  }

  render() {
    // everytime there is a change in state or props, caused by handlers, render() re-runs everytime. updating the dom
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
          isAuthenticated={this.state.isAuthenticated}
        />
      );
    }

    return (
      <div>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Unmount Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.title}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            toggle={this.togglePersonsHandler}
            authentication={this.authenticationHandler}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default withAddedClass(App, classes.App);
