"use strict";


const React = require("react");
const ReactRedux = require("react-redux");
const NoteRow = require("./NoteRow");
const notesStore = require('../stores/notesStore');
const noteActions = require('../actions/noteActions');
const { connect } = ReactRedux;

// TODO !!!!!!!! move this back into the right place. into flerp
//{props.notes.map(note => {
//    return (<NoteRow id={ note.id } text={ note.text } updateHandler={ store.plerp }></NoteRow>)
//})}
const component = React.createClass({
    propTypes : {
        notes : React.PropTypes.array,
        addHandler : React.PropTypes.function
    },
    render () {
        //const props = this.getProps();
        return (
            <div className='flerp'>This is contents bitch
            </div>
        );
    }
});






// TODO !!!!!! implement :
const addHandler = '';
const updateHandler = '';
const deleteHandler = '';

const mapStateToProps = (state, props) => {
    return {
        notes : notesStore,
        addHandler,
        updateHandler,
        deleteHandler
    };
};
const mapDispatchToProps = {
    addNote : noteActions.addNote,
    updateNote : noteActions.updateNote,
    deleteNote : noteActions.deleteNote
};

// exports a connected component :
module.exports = connect(mapStateToProps, mapDispatchToProps)(component);
