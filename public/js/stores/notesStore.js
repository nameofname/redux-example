"use strict";

const Redux = require('redux');
const { createStore } = Redux; // const createStore = Redux.createStore;
const id = require('lodash.uniqueid');

const newNote = text => {
    return { id : id(), text };
};

const notesStore = (state = [], action = {}) => {
    switch (action.type) {
        case "ADD_NOTE" :
            return [
                ...state,
                newNote(action.text)
            ];
        case "UPDATE_NOTE":
            return state.map(note => {
                return note.id === action.id ? Object.assign(note, { text : action.text }) : note;
            });
        case "DELETE_NOTE":
            return state.filter(note => {
                return note.id !== action.id
            });
        default :
            return state;
    }
};

module.exports = createStore(notesStore);
