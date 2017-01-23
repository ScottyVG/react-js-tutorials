import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Plan your day",
<<<<<<< HEAD
        complete: true
=======
        complete: false
>>>>>>> 364e7f5f42f4ad18d01c6e4ee15e1611508b7954
      },
      {
        id: 235684679,
        text: "Pick up groceries",
<<<<<<< HEAD
        complete: true
=======
        complete: false
>>>>>>> 364e7f5f42f4ad18d01c6e4ee15e1611508b7954
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
<<<<<<< HEAD
        this.createTodo(action.id.text);
=======
        this.createTodo(action.newTodo.text);
>>>>>>> 364e7f5f42f4ad18d01c6e4ee15e1611508b7954
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
