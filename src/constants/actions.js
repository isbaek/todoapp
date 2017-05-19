var nextToDoId = 0;
//add todo
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextToDoId++,
    text
  }
}

export function deleteToDo(id) {
  return {
    type: 'DELETE_TODO',
    id: id,
  }
}
