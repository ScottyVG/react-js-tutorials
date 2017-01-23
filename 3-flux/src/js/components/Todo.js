import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { complete, edit, text } = this.props;
    const listStyles = {
      fontSize: "16px",
      color: "#7e7e7e",
    }
    const completeStyle = {
      position: "absolute",
      right: "40px",
      top: "2px",
      border: "1px solid white",
    }
    const deleteStyle = {
      position: "absolute",
      right: "0px",
      top: "2px",
      border: "1px solid white",
    }
    const editStyle = {
      position: "absolute",
      left: "0px",
      top: "2px",
      border: "1px solid white",
    }
    const listText = {
      position: "absolute",
      left: "40px",
    }

    const editIcon = <button style={editStyle} class="btn btn-small btn-info glyphicon glyphicon-pencil"></button>
    const completeIcon = complete ? <button style={completeStyle} class="btn btn-small btn-success glyphicon glyphicon-ok"></button> : <button style={completeStyle} class="text-right btn btn-small btn-warning glyphicon glyphicon-remove"></button>
    const deleteIcon = <button style={deleteStyle} class="btn btn-small btn-danger glyphicon glyphicon-trash"></button>


    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (

      <li style={listStyles} class="list-group-item">
        <span>{editIcon}</span>
        <span style={listText}>&#160; {text}</span>
        <span>&#160;{completeIcon}</span>
        <span>&#160;{deleteIcon}</span>
      </li>
    );
  }
}
