"use strict";


const notesStore = require('../stores/notesStore');
const id = require('lodash.uniqueid');
const { actionNames } = notesStore;


module.exports = {
    addNote : (text) => {
        // return a function that accepts the dispatcher, then dispatches the action. Hence action creator.
        return (dispatch) => {
            // put the ID incrementor in here so that the reducer can remain a pure function :
            return dispatch({
                type : actionNames.ADD_NOTE,
                id : id(),
                text
            });
        };
    },
    updateNote : (id, text) => {
        return {
            type : actionNames.UPDATE_NOTE,
            id, text
        };
    },
    deleteNote : (id) => {
        return (dispatch) => {
            return dispatch({
                type : actionNames.DELETE_NOTE,
                id
            })
        }
    }
};
