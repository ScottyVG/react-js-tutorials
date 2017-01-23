import React from "react";

// import * as TodoActions from "../actions/TodoActions";
// import TodoStore from "../stores/TodoStore";

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
    const editStyle = {
      position: "absolute",
      left: "0px",
      top: "2px",
      border: "1px solid white",
    }
    const favStyle = {
      position: "absolute",
      left: "40px",
      top: "2px",
      border: "1px solid white",
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
    const listText = {
      position: "absolute",
      left: "80px",
    }

    const editIcon = <button style={editStyle} class="btn btn-small btn-default glyphicon glyphicon-edit"></button>
    const favIcon = <button style={favStyle} class="btn btn-small btn-default glyphicon glyphicon-star-empty"></button>
    const completeIcon = complete ? <button style={completeStyle} class="btn btn-small btn-success glyphicon glyphicon-ok"></button> : <button style={completeStyle} class="text-right btn btn-small btn-default glyphicon glyphicon-ok-circle"></button>
    const deleteIcon = <button style={deleteStyle} class="btn btn-small btn-default glyphicon glyphicon-trash"></button>


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
        <span>{favIcon}</span>
        <span style={listText}>{text}</span>
        <span>{completeIcon}</span>
        <span>&#160;{deleteIcon}</span>
      </li>
    );
  }
}
