"use strict";

// this is the entry file.
// create the notes store
// get the notes component and render that with the store of notes.
const notesStore = require('./stores/notesStore');
const NotesContainer = require('./components/NotesContainer');
const render = () => {
    ReactDOM.render(NotesContainer, notesStore.getState());
    //ReactDOM.render(<NotesContainer notes={...notesStore.getState()} ></NotesContainer>)
};
let state;

notesStore.dispatch({
    type : 'ADD_NOTE',
    text : 'this is a sample note.'
});
notesStore.dispatch({
    type : 'ADD_NOTE',
    text : 'this is one that will get deleted.'
});

state = notesStore.getState();

notesStore.dispatch({
    type : 'UPDATE_NOTE',
    text : 'This is the modified text.',
    id : state[0].id
});

notesStore.dispatch({
    type : 'ADD_NOTE',
    text : 'a third note that I added.'
});

notesStore.dispatch({
    type : 'DELETE_NOTE',
    id : state[1].id
});

store.subscribe(render);

console.log(notesStore.getState());
