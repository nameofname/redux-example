"use strict";


const Redux = require('redux');
const { createStore } = Redux; // const createStore = Redux.createStore;
const ActionNames = {
    ADD_NOTE : 'ADD_NOTE',
    UPDATE_NOTE : 'UPDATE_NOTE',
    DELETE_NOTE : 'DELETE_NOTE'
};

// this is my reducer function.
// note that it's a pure function
const notesStore = (state = [], action = {}) => {
    switch (action.type) {
        case ActionNames.ADD_NOTE :
            return [
                ...state,
                {
                    text : action.text,
                    id : action.id
                }
            ];
        case ActionNames.UPDATE_NOTE:
            return state.map(note => {
                return note.id === action.id ? Object.assign(note, { text : action.text }) : note;
            });
        case ActionNames.DELETE_NOTE:
            return state.filter(note => {
                return note.id !== action.id
            });
        default :
            return state;
    }
};

// create the store with the Redux method createStore
const store = createStore(notesStore);
store.actionNames = ActionNames;
module.exports = store;
