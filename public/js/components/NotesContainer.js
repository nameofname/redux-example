"use strict";


const React = require('react');
const noteActions = require('../actions/noteActions');
const { connect } = require("react-redux");
const NoteRow = require('./NoteRow');
const AddNote = require('./AddNote');

// This is the top level component which will receive the store from the Provider in the entry file.
const NotesContainerComponent = React.createClass({
    propTypes : {
        notes : React.PropTypes.array,
        updateNote: React.PropTypes.func.isRequired,
        addNote: React.PropTypes.func.isRequired,
        deleteNote: React.PropTypes.func.isRequired
    },
    render () {
        return (
            <div className='flerp'>
                <AddNote addNote={this.props.addNote} />
                <h2>This is contents bitch</h2>
                {this.props.notes.map(note => {
                    return (<NoteRow
                        key={note.id}
                        text={note.text}
                        id={note.id}
                        updateNote={this.props.updateNote}
                        deleteNote={this.props.deleteNote}
                    />)
                })}
            </div>);
    }
});


const mapStateToProps = (state, props) => {
    return {
        notes : state
    };
};
const mapDispatchToProps = dispatch => {
    return {
        updateNote : (id, text) => { dispatch(noteActions.updateNote(id, text));},
        addNote : (text) => { dispatch(noteActions.addNote(text)); },
        deleteNote : (id) => { dispatch(noteActions.deleteNote(id)); }
    };
};


// exports a connected component :
module.exports = connect(mapStateToProps, mapDispatchToProps)(NotesContainerComponent);
