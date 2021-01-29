import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
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
      <h1>Hi, I am a React app</h1>
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
