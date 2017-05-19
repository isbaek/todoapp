import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteToDo } from "../constants/actions";
import Faclose from "react-icons/lib/fa/close";

function Todos({ todos, dispatch }) {
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={id => dispatch(deleteToDo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(Todos);

/*
const mapDispatchToProps = (dispatch) => {
  return {
    DeleteTodo: (id) => {
      dispatch(deleteToDo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapDispatchToProps
)(ListToDo)
*/
//export default VisibleTodoList;
