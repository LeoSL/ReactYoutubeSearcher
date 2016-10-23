import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyA4f2KJBDGKLdSH8g1TVwgaO9KIVf2sXfw';

//   >> COMPONENT <<
// Create a new component.
// This component should produce to produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App></App>, document.querySelector('.container'));
