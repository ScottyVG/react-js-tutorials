import dispatcher from "../dispatcher";

<<<<<<< HEAD
export function createTodo(id) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    id,
  });
}

export function completeTodo(id) {
  dispatcher.dispatch({
    type: "COMPLETE_TODO",
    id,
  });
}

export function editTodo(id) {
  dispatcher.dispatch({
    type: "EDIT_TODO",
    id,
=======
export function createTodo(newTodo) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    newTodo,
>>>>>>> 364e7f5f42f4ad18d01c6e4ee15e1611508b7954
  });
}



export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 8484848484,
        text: "Go Shopping Again",
        complete: false
      },
      {
        id: 6262627272,
        text: "Hug Wife",
        complete: true
      },
    ]});
  }, 1000);
}
