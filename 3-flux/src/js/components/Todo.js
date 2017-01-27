import React from "react";

import * as TodoActions from "../actions/TodoActions";
// import TodoStore from "../stores/TodoStore";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  updateComplete(id) {
    TodoActions.completeTodo(id);
  }

  updateFavorite(id) {
    TodoActions.favoriteTodo(id);
  }

  // updateDelete(id) {
  //   TodoActions.deleteTodo(id);
  // }


  render() {
    const { complete, edit, text, id } = this.props;
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
    // const favIcon = <button style={favStyle} onClick={this.updateFavorite.bind(this, id)} class={"btn btn-small glyphicon " + (favorite ? "btn-warning glyphicon-star" : "btn-default glyphicon-star-empty")}></button>
    const favIcon = <button style={favStyle} class="btn btn-small btn-default glyphicon glyphicon-star-empty"></button>
    const completeIcon = <button style={completeStyle} onClick={this.updateComplete.bind(this, id)} class={"btn btn-small glyphicon " + (complete ? "btn-success glyphicon-ok" : "btn-default glyphicon-ok-circle")}></button>
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
