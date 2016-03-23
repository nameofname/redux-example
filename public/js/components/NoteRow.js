"use strict";

const React = require("react");
let input;// use the ref attribute to assign the input to the current input value below

/**
 * This is the note row component. Each note row displays the note with an optional input to update.
 * @type {*|Function}
 */
const component = React.createClass({
    propTypes : {
        text : React.PropTypes.string,
        id : React.PropTypes.number,
        updateNote : React.PropTypes.func.isRequired,
        deleteNote : React.PropTypes.func.isRequired
    },
    updateNoteHandler (e) {
        e.preventDefault();
        const val = input.value.trim();
        if (!val) { return; }
        this.props.updateNote(this.props.id, val);
        input.value = '';
    },
    deleteNoteHandler (e) {
        debugger; // do we get the e argument here?
        e.preventDefault();
        this.props.deleteNote(this.props.id);
    },
    render () {
        const props = this.props;

        return (
            <div className='row well'>
                <span>id : { props.id }</span>
                <p>{ props.text }</p>
                <br />
                <span>Update Note : </span>
                <input ref={ node => {input = node} } type='text' placeholder={ props.text } />
                <input type='submit' className='btn' value='Update Note' onClick={ this.updateNoteHandler } />
                <a href='*' onClick={ this.deleteNoteHandler }>delete</a>
            </div>
        );
    }
});


module.exports = component;
