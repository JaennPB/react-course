import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

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
  constructor(props) {
    super(props);
    this.inputElRef = React.createRef();
  }

  // short and modern way of using context API
  // class component now provided with context.example
  static contextType = AuthContext;

  componentDidMount() {
    this.inputElRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering... Person');
    return (
      <React.Fragment>
        <WithClass classes={classes.Person}>
          {this.context.authenticated ? (
            <p>Logged in!</p>
          ) : (
            <p>Please log in!</p>
          )}
          <p>
            I am {this.props.name} and I am {this.props.age} years old
          </p>
          <input
            onChange={this.props.change}
            value={this.props.name}
            ref={this.inputElRef}
          />
          <StyledBtn onClick={this.props.delete}>Delete</StyledBtn>
        </WithClass>
        <div>Adjecent JSX</div>
      </React.Fragment>
    );
    // react fragment is a HOC (higher order component and under the hood, it acts as a wrapping container for jsx, it will not render in the real DOM!)
  }
}

// proptypes help us define with type of prop is required for a certain component (helps us when working in teams!)
Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func,
  delete: PropTypes.func,
};

export default Person;
