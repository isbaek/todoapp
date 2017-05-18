import '../constants/actions'


function todo (state = [], action) {
  if (action.type == 'ADD_TODO') {
    return {
      ...state,
      id: action.id,
      text: action.text,
    };
  } else if (action.type == 'DELETE_TODO') {
      return {
        ...state,
      }
  }
  return state;
}

export default todo;
