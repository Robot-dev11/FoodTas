import React  from 'react';
import ReactDOM from 'react-dom/client';

// few more important things from react.

// will the order of js file matter --> it will matter cdn link should be have priority first

// React Element is an object => HTMLElement 
// creating component
const heading = React.createElement("h1", {id: "heading"}, "This is Heading" )

// creating the root for DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// rendering the component
root.render(heading);