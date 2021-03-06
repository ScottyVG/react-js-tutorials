import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  });
}

export function completeTodo(id) {
  dispatcher.dispatch({
    type: "COMPLETE_TODO",
    id
  });
}

export function favoriteTodo(id) {
  dispatcher.dispatch({
    type: "FAVORITE_TODO",
    id
  });
}
//
// export function editTodo(id) {
//   dispatcher.dispatch({
//     type: "EDIT_TODO",
//     id,
//   });
// }
//

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
        complete: false,
        archive: false,
        favorite: false
      },
      {
        id: 6262627272,
        text: "Hug Wife",
        complete: true,
        archive: false,
        favorite: false
      },
    ]});
  }, 1000);
}
