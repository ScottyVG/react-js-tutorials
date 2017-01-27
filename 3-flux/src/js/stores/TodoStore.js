import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Plan your day",
        complete: true
      },
      {
        id: 235684679,
        text: "Pick up groceries",
        complete: true
      },
      {
        id: 9485762019,
        text: "Clean the house",
        complete: false
      },
      {
        id: 51038573983,
        text: "Schedule an Oil Change",
        complete: false
      },
      {
        id: 11847529858,
        text: "Reflect & Track your week",
        complete: false
      },
    ];
  }

  getAll() {
    return this.todos;
  }

  createTodo(text) {
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false,
    });
    this.emit("change");
  }

  completeTodo(id) {
    this.todos.forEach(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }

    });
    this.emit("change");
  }

  handleActions(action) {
    console.log("TodoStore received an action", action);
    switch(action.type) {
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "COMPLETE_TODO": {
        this.completeTodo(action.id);
        break;
      }
      // case "FAVORITE_TODO": {
      //   this.favoriteTodo(action.id.text);
      //   break;
      // }
      // case "EDIT_TODO": {
      //   this.editTodo(action.id.text);
      //   break;
      // }
      // case "DELETE_TODO": {
      //   this.deleteTodo(action.id.text);
      //   break;
      // }
    }
  }

}

const todoStore = new TodoStore;
window.dispatcher = dispatcher
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
