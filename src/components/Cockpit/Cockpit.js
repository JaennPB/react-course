import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // faking HTTP request
    const timer = setTimeout(() => {
      alert('Cockpit mounted...');
    }, 1000);
    // Use effect combines ComponentDidMount and componentDidUpdate. it takes two arguments: (function, dependecy)
    // dependecy is the element or component that should run useEffect (componentDidUpdate)
    // by setting an empty array you are choosing only to use componentDidMount [] (will only run once cockpit 'mounts')
    return () => {
      console.log('[Cockpit.js] Clean up work in useEffect');
      clearTimeout(timer);
      // adding a return in a useEffect function adds the funtionality to do some cleanup work (componentWillUnmount)
      // everything inside this funtion block will be executed before the main useEffect but AFTER the last render (when removed)
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2ND useEffect');
    return () => {
      console.log('[Cockpit.js] Clean up work in 2ND useEffect');
    };
    // if second argument is left empty, useEffect will run for every render cycle
    // in useEffect, return always runs first before the main body of the function
  });

  // condtitionally adding css class into variable so that it can be passed as a class name
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  // assigning classes into empty array to pass as string
  let assignedClasses = [];
  if (props.persons.length >= 3) {
    assignedClasses.push(classes.invisible);
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>
        {props.persons.length === 0
          ? 'You have deleted all users'
          : 'You are deleting users'}
      </p>
      <button className={btnClass} onClick={props.toggle}>
        Show list
      </button>
    </div>
  );
};

export default Cockpit;
