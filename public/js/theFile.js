"use strict";

//alert('on the faces');
const notesStore = require('./stores/notesStore');

alert(notesStore.getState());
alert('flerp');

notesStore.dispatch({
    type : 'ADD_NOTE',
    text : 'this is a sample note.'
});

alert(notesStore.getState());
