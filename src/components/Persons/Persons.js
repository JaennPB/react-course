import React, { PureComponent } from 'react';
import Person from './Person/Person';
// PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state.

class Persons extends PureComponent {
  // =================================
  // component lifecycles hooks

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.delete !== this.props.delete ||
  //     nextProps.change !== this.props.change
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // runs after component has finished loading im the DOM (after render())
    // similar to componentDidMount, great palce to make API requests
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    // runs right BEFORE a component is removed from the DOM
    // great fot cleanup work: removing eventlisteners, canceling network requests, etc
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering... PERSONS');

    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          // using arrow funtion so that the function does not immediately run. instead, we are passing a reference of the method
          delete={() => this.props.delete(index)}
          key={person.key}
          change={(event) => this.props.change(event, person.key)}
          isAuth={this.props.isAuthenticated}
        />
      );
    });
  }
}

export default Persons;
