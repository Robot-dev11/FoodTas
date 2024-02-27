import React  from 'react';
import ReactDOM from 'react-dom/client';



const parent = React.createElement('div', {
    id: "parent"
}, [
    React.createElement('div', {
        id: "child"
    }, [React.createElement('h1', {}, "This is namaste React"), React.createElement('h2', {}, "I am a H2 Tag")]),
    React.createElement('div', {
        id: "child2"
    }, [React.createElement('h1', {}, "I am H1 Tag from another child"), React.createElement("h2", {}, "I am an H2 Tag from another child")])
])

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(parent);
root.render(parent);

// few more important things from react.

// will the order of js file matter --> it will matter cdn link should be have priority first

// React Element is an object