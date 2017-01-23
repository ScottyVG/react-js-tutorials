import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class Featured extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  createTodo(newTodo) {
    newTodo = {
      id: Date.now(),
      text: this.input.value,
      complete: false
    }
    TodoActions.createTodo(newTodo);
    this.input.value = ''
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });


    return (
      <div class="container">
        <div class="text-center">
          <h1>Todos</h1>
          <input type="text" class="form-control" style={{width: '20em', display: 'inline'}} ref={(input) => this.input = input} />&#160;
          <button class="btn btn-success glyphicon glyphicon-plus" aria-hidden="true" style={{display: 'inline'}}onClick={this.createTodo.bind(this)}></button>&#160;
          <button class="btn btn-medium btn-success glyphicon glyphicon-repeat" onClick={this.reloadTodos.bind(this)}></button>
        </div>
        <br></br>
        <div class="card">
          <ul class="list-group list-group-flush">
          {TodoComponents}
          </ul>
        </div>
      </div>
    );
  }
}
