"use strict";

// this is the entry file.
// create the notes store
// get the notes component and render that with the store of notes.
const React = require("react");
const ReactDOM = require("react-dom");
const notesStore = require('./stores/notesStore');
const NotesContainer = require('./components/NotesContainer');

const Provider = React.createClass({
    propTypes : { store : React.PropTypes.object },
    childContextTypes : { store : React.PropTypes.object },
    getChildContext () {
        return { store : this.props.store };
    },
    render () {
        return this.props.children;
    }
});

const render = () => {
    const container = document.querySelectorAll('#container')[0];
    console.log('and awayyyyyy we go!');
    ReactDOM.render(
        <Provider store={notesStore}>
            <NotesContainer></NotesContainer>
        </Provider>
        ,container);
};

window.onload = function () {
    notesStore.subscribe(render);
    render();
};
