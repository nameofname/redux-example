"use strict";

const React = require("react");
let addInput;

/**
 * This is the note row component. Each note row displays the note with an optional input to update.
 * @type {*|Function}
 */
const AddNoteComponent = React.createClass({
    propTypes : {
        addNote : React.PropTypes.func.isRequired
    },
    addNoteHandler (e) {
        e.preventDefault();
        var val = addInput.value;
        addInput.value = '';
        return this.props.addNote(val);
    },
    render () {
        return (
            <div>
                <input ref={node => {addInput = node}} type='text' placeholder='create new note' />
                <input type='submit' className='btn' value='Submit' onClick={ this.addNoteHandler } />
            </div>
        );
    }
});


module.exports = AddNoteComponent;
