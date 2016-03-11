"use strict";

const Redux = require('redux');
const createStore = { Redux };

const newNote = text => {
    return { id : 123, text : text };
};

const notesStore = (state = [], action = {}) => {
    switch (action.type) {
        case "ADD_NOTE" :
            return [
                ...state,
                newNote(action.text)
            ];
        default :
            return state;
    }
};

debugger;
module.exports = createStore(notesStore);