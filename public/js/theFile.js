"use strict";

// this is the entry file.
// create the notes store
// get the notes component and render that with the store of notes.
const React = require("react");
const ReactDOM = require("react-dom");
const notesStore = require('./stores/notesStore');
const App = require('./components/App');
const { Provider } = require('react-redux');
const { render } = require('react-dom');




window.onload = function () {
    const container = document.querySelectorAll('#app')[0];
    render(
        <Provider store={notesStore}>
            <App />
        </Provider>
        ,container
    );
};
