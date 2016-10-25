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

* A function component can contain a class-based component. No problem at all!

## States

* State is a plain Javascript object that is used to record and react to user's events.
  * Each class-based component has its own *state object*
  
* We have to intialize the state inside of a class-constructor method. Ex: `super(props)`.
  
* Whenever a component state is changed, the component immediately re-renders - and also forces all of its children to do so.

* Only **class-based components** have states.

```JSX
this.setState({ term: event.target.value });
//    ^ the usual function that we use to manipulate the state of a class-based component
```

### Controlled-component
A controlled-component has its values set by state:
```JSX
<input
  value = {this.state.searchTerm}
  onChange = {event => this.setState({ searchTerm: event.target.value })}
/>
```

### Events
* When user types something, it doesn't change the input value, instead, it triggers an event, that changes the state of the component, which finally changes the input value.


# Redux
