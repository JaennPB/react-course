import React from 'react';

// context API is a way to essentially create global variables that can be passed around in a React app
// this is the alternative to "prop drilling", or passing props from grandparent to parent to child, and so on
// it makes it simpler to pass 'props' to components by creating a context object that may be accessed from anywhere
// it needs a 'provider' and a 'consumer'

// AuthContext.Provider provides all child elements with a context object
// AuthContext.Consumer lets us consume the object with 'conext' that the provider provided

// **********************************************************
// NEW MODERN WAY OF USING CONTEXT API
// useContext hook (functional components)
// contextType static method (classed bassed components)

const authContext = React.createContext({
  authenticated: false,
  login: () => {},
});

export default authContext;
