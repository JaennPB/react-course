import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
  console.log('[Persons.js] rendering...');
  return props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        // using arrow funtion so that the function does not immediately run. instead, we are passing a reference of the method
        delete={() => props.delete(index)}
        key={person.key}
        change={(event) => props.change(event, person.key)}
      />
    );
  });
};

export default Persons;
