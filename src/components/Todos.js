import React from "react";
import { connect } from "react-redux";
import { deleteToDo } from "../constants/actions";
import "../stylesheets/components/Todos.css";
import "../stylesheets/components/Addtodo.css";
import Close from "react-icons/lib/md/close";

function Todos({ todos, dispatch }) {
  return (
    <div>

      <div className="ul-container">
        <ul>
          {todos.map(todo => (
            <div>
              <li key={todo.id}>
                {todo.text}
              </li>
              <Close
                className="close-button"
                onClick={id => dispatch(deleteToDo(todo.id))}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(Todos);
