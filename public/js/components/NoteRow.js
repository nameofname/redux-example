"use strict";

const React = require("react");




// TODO ::: more prop types?
        //updateNote : React.PropTypes.function,
        //deleteNote : React.PropTypes.function // TODO !!! add delete link.

const component = React.createClass({
    propTypes : {
        text : React.PropTypes.string,
        id : React.PropTypes.number
        //addNote : React.PropTypes.function // TODO !!!!! re-enable! cant figure out why its not getting passed!!!!!!!!
    },
    updateNoteHandler (input) {
        const val = input.value.trim();
        if (!val) { return; }
        this.props.updateNote(val);
        input.value = '';
    },
    render () {
        const props = this.props;
        let input;// use the ref attribute to assign the input to the current input value below
        debugger;

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



module.exports = component;

//// for testing purposes, we connect a false (test) state
//const mapStateToProps = (state, props) => {
//    return {
//        id : 1,
//        text : 'asdf'
//    };
//};
//const mapDispatchToProps = {
//    //addNote : noteActions.addNote,
//    updateNote : noteActions.updateNote,
//    deleteNote : noteActions.deleteNote
//};
//
//
//
//
//// exports a connected component :
//module.exports = connect(mapStateToProps, mapDispatchToProps)(component);
