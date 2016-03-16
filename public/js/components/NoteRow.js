"use strict";

const React = require("react");

module.exports = React.createClass({
    propTypes : {
        text : React.PropTypes.string,
        id : React.PropTypes.number,
        updateNote : React.PropTypes.function,
        deleteNote : React.PropTypes.function // TODO !!! add delete link and test that shit out.
    },
    updateNoteHandler (input) {
        const val = input.value.trim();
        if (!val) { return; }
        this.props.updateNote(val);
        input.value = '';
    },
    render () {
        const props = this.getProps();
        let input;// use the ref attribute to assign the input to the current input value below

        return (
            <div className='row'>
                <span className='lead'>ID : { props.id }</span>
                <span className='lead'>TEXT : { props.text }</span>
                <br />
                <input ref={ node => {input = node} } type='text' placeholder='{ props.text }' />
                <input type='submit' className='btn' value='Update Note' onClick='{ e => {
                    e.preventDefault();
                    this.updateNoteHandler(input);
                }}' />
            </div>
        );
    }
});
