"use strict";

const React = require('react');
const NotesContainer = require('./NotesContainer');

// App container is almost nothing, but it's here in case we want to add more things to the app later.
// The top level receives the store from the provider in the entry file.
// all the top level componenets under this App component are connected components,
// the lower level components are not connected, they recieve their props from the connected components.
const App = () => (
    <div>
        <NotesContainer />
    </div>
);

module.exports = App;
