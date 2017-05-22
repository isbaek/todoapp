import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../constants/actions";
import "../stylesheets/components/Addtodo.css";

let input;

function AddTodo({ dispatch }) {
  return (
    <div>
      <div className="welcome center">
        <h2>Welcome! Please add a to do</h2>
      </div>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          className="input"
          maxLength="40"
          ref={node => {
            input = node;
          }}
          type="text"
          placeholder="Type something..."
        />
        <button type="submit">
          Add To do
        </button>
      </form>
    </div>
  );
}

AddTodo = connect()(AddTodo);

export default AddTodo;
