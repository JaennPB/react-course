import React from 'react';

const withClass = (props) => {
  return <div className={props.classes}>{props.children}</div>;
};
// higher order componets or hocs, server as wrapping containers for classes, extra logic, error handling etc.
// in this case, we are using this hoc as a wrapping container to add styling to our Person component

export default withClass;
