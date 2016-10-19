import React from 'react';
import ReactDOM from 'react-dom';

//   >> COMPONENT <<
// Create a new component.
// This component should produce to produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App></App>, document.querySelector('.container'));
