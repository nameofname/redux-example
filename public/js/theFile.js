"use strict";

const notesStore = require('./stores/notesStore');

notesStore.dispatch({
    type : 'ADD_NOTE',
    text : 'this is a sample note.'
});

console.log(notesStore.getState());
