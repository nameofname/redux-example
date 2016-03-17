"use strict";


const React = require("react");
const noteActions = require('../actions/noteActions');
const { connect } = require("react-redux");
const NoteRow = require("./NoteRow");


//const notesStore = require('../stores/notesStore');




// This is the top level component which will receive the store from the Provider in the entry file.
const NotesContainerComponent = React.createClass({
    propTypes : {
        notes : React.PropTypes.array
    },
    render () {
        debugger;
        return (
        <div className='flerp'>This is contents bitch
            {this.props.notes.map(note => {
                return (<NoteRow key={note.id} text={note.text} id={note.id} addNote={this.props.addNote} />)
            })}
        </div>);
    }
});




// for testing purposes, we connect a false (test) state
const mapStateToProps = (state, props) => {
    return {
        notes : state
    };
};
const mapDispatchToProps = {
    //addNote : noteActions.addNote
    updateNote : noteActions.updateNote
    //deleteNote : noteActions.deleteNote
};




// exports a connected component :
module.exports = connect(mapStateToProps, mapDispatchToProps)(NotesContainerComponent);
//module.exports = component;
