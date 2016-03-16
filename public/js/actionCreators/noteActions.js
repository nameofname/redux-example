"use strict";


const notesStore = require('../stores/notesStore');
const id = require('lodash.uniqueid');
const { actionNames } = notesStore;


module.exports = {
    addNote : (text) => {
        // put the ID incrementor in here so that the reducer can remain a pure function :
        return {
            action : actionNames.ADD_NOTE,
            id : id(),
            text
        };
    },
    updateNote : (id, text) => {
        return {
            action : actionNames.UPDATE_NOTE,
            id, text
        };
    },
    deleteNote : (id) => {
        return {
            action : actionNames.DELETE_NOTE,
            id
        };
    }
};
