# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

# ES6

* const ("var")
declaring a variable
"this is the FINAL variable" (constant)
we dont reassign

## JSX

```HTML
return <div>Hi!</div>;
```

# React

import React from 'react';
//     ^ variable assigned into this file;

## COMPONENTS
```JSX
// JSX
const App = function() {
  return <div>Hi!</div>;
}
```

```JSX
// ES6
const App = () => {
//             ^ fat arrow, same thing that function
  return <div>Hi!</div>;
}
```
This :arrow_up: we can interpretate as a Class, not a instance.

```JSX
ReactDOM.render(<App></App>, xx);
                             ^ target container
```
:arrow_up: this tells react to render a instance of App, not the class(component) itself.

#### :one: FUNCTIONAL COMPONENT
```JS
const SearchBar = () => {
  return <input />; // React.createElement;
};
```

#### :two: CLASS-BASED COMPONENT
When you want that a component keeps some kind of record inside itself.

```JSX
class SearchBar extends React.Component {
  render() {
    return <input />;
  }
}
``` 
##### ES6 :arrow_down:
```ES6
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return <input />;
  }
}
```
# Redux
