"use strict";

const React = require("react");

/**
 * This is the note row component. Each note row displays the note with an optional input to update.
 * @type {*|Function}
 */
const component = React.createClass({
    propTypes : {
        text : React.PropTypes.string,
        id : React.PropTypes.number,
        updateNote : React.PropTypes.func.isRequired
    },
    updateNoteHandler (input) {
        const val = input.value.trim();
        if (!val) { return; }
        this.props.updateNote(this.props.id, val);
        input.value = '';
    },
    render () {
        const props = this.props;
        let input;// use the ref attribute to assign the input to the current input value below

        return (
            <div className='row well'>
                <p>id : { props.id } text : { props.text }</p>
                <br />
                <input ref={ node => {input = node} } type='text' placeholder={ props.text } />
                <input type='submit' className='btn' value='Update Note' onClick={ e => {
                    e.preventDefault();
                    this.updateNoteHandler(input);
                }} />
            </div>
        );
    }
});


module.exports = component;
