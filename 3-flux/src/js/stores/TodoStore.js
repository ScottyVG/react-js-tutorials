import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Plan your day",
        complete: false
      },
      {
        id: 235684679,
        text: "Pick up groceries",
        complete: false
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

  createTodo(text) {
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false,
    });
    this.emit("change");
  }



  getAll() {
    return this.todos;
  }


  handleActions(action) {
    console.log("TodoStore received an action", action);
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.newTodo.text);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
    }
  }

}

const todoStore = new TodoStore;
window.dispatcher = dispatcher
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
