"use strict";

var React = require("React");
var NoteRow = require("./NoteRow");

module.exports = React.createClass({
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
