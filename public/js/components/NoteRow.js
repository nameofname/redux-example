"use strict";

var React = require("React");

module.exports = React.createClass({
    propTypes : {
        text : React.PropTypes.string,
        id : React.PropTypes.number,
        updateHandler : React.PropTypes.function,
        deleteHandler : React.PropTypes.function
    },
    render () {
        const props = this.getProps();
        return (
            <div className='row'>
                <span className='lead'>ID : { props.id }</span>
                <span className='lead'>TEXT : { props.text }</span>
                <br />
                <input type='text' placeholder='{ props.text }' />
                <input type='submit' className='btn' value='Update Note' />
            </div>
        );
    }
});
