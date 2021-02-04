import React from 'react';

const withAddedClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withAddedClass;
