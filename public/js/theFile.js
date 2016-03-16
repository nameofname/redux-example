"use strict";

// this is the entry file.
// create the notes store
// get the notes component and render that with the store of notes.
const ReactDOM = require("react-dom");
const notesStore = require('./stores/notesStore');
const NotesContainer = require('./components/NotesContainer');

const render = () => {
    console.log('and awayyyyyy we go!');
    console.log(notesStore.getState());
    ReactDOM.render(NotesContainer, notesStore.getState());
    //ReactDOM.render(<NotesContainer notes={...notesStore.getState()} ></NotesContainer>)
};


notesStore.subscribe(render);
render();
