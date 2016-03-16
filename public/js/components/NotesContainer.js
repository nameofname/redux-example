"use strict";


const React = require("react");
const ReactRedux = require("react-redux");
const NoteRow = require("./NoteRow");
const noteActions = require('../actions/noteActions');
const { connect } = ReactRedux;


const component = React.createElement({
    propTypes : {
        notes : React.PropTypes.array,
        addHandler : React.PropTypes.function
    },
    render () {
        const props = this.getProps();
        return (
            <div className='flerp'>This is contents bitch
                {props.notes.map(note => {
                    return (<NoteRow id={ note.id } text={ note.text } updateHandler={ store.plerp }></NoteRow>)
                })}
            </div>
        );

        return (
            <div className="col-md-9">
                <DropdownButton title="Apply Action" id="bulk-action-dropdown">
                    {this.props.actions.map((action) => {
                        return (<MenuItem eventKey={action.key} key={action.key}>{action.displayText}</MenuItem>);
                    })}
                </DropdownButton>
                <span className="items-selected text-info"><i>0 items selected</i></span>
            </div>
        )
    }
});


const mapStateToProps = (state, props) => {};
const mapDispatchToProps = {
    addNote : noteActions.addNote,
    updateNote : noteActions.updateNote,
    deleteNote : noteActions.deleteNote
};

// exports a connected component :
module.exports = connect(mapStateToProps, mapDispatchToProps)(component);
