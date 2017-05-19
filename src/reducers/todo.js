import "../constants/actions";

const initialState = {
  todos: [
    {
      id: 1,
      text: ""
    }
  ]
};

function todo(state = initialState, action) {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: state.todos.concat({
        id: action.id,
        text: action.text
      })
    };
  } else if (action.type === "DELETE_TODO") {
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id != action.id)
    };
  }
  // No or unsupported action
  return state;
}

export default todo;
