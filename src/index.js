import React from 'react';
import ReactDOM from 'react-dom';
// create a new component. 
// this component should create some HTML.
const App = function() {
    return <div>mie!</div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
// document.querySelector('.container') is the root container element