import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  // =============================================
  // useRef and useContext hooks
  const toggleBtnRef = useRef(null);
  const context = useContext(AuthContext);

  // =============================================
  // react HOOK (useEffect)
  // the useEffect Hook is componentDidMount, componentDidUpdate, and componentWillUnmount combined
  // by default, it runs both after the first render and after every update
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Use effect combines ComponentDidMount and componentDidUpdate. it takes two arguments: (function, dependecy)
    // dependecy is the element or component that should run useEffect (componentDidUpdate)
    // by setting an empty array you are choosing only to use componentDidMount [] (will only run once cockpit 'mounts')
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] Clean up work in useEffect');
      // adding a return in a useEffect function adds the funtionality to do some cleanup work (componentWillUnmount)
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2ND useEffect');
    return () => {
      console.log('[Cockpit.js] Clean up work in 2ND useEffect');
    };
    // if second argument is left empty, useEffect will run for every render and update cycle
    // in useEffect, return always runs first before the main body of the function
  });

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  // assigning classes into empty array to pass as string
  let assignedClasses = [];
  if (props.personsLength >= 3) {
    assignedClasses.push(classes.invisible);
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>
        {props.personsLength === 0
          ? 'You have deleted all users'
          : 'You are deleting users'}
      </p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.toggle}>
        Show list
      </button>
      <button onClick={context.login}>Log in</button>
    </div>
  );
};

// AuthContext.Consumer lets us consume the object that the provider provided

// When a component is wrapped in React.memo(), React renders the component and memoizes the result. Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering.
export default React.memo(cockpit);
