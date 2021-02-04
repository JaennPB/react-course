import React from 'react';

const withAddedClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
    // spreading props into wrapped component so that props can be rendered
  );
};

export default withAddedClass;
