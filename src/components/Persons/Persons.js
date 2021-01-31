import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps #1');
  // }

  shouldComponentUpdate(nextProps, NextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
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
        />
      );
    });
  }
}

export default Persons;
