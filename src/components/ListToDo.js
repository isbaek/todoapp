import React from "react";
import { connect } from "react-redux";
import AddTodo from "./AddToDo";
import { addTodo } from "../constants/actions";

function Todos({ todos, dispatch }) {
  return (
    <div>
      <h1>Todos</h1>
      <AddTodo />
      <ul>
        {todos.map(todo => <li key={todo.id}>#{todo.id} - {todo.text}</li>)}
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
