import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../constants/actions";

let input;

const AddTodo = ({ dispatch }) => (
  <div>
    <form
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
        ref={node => {
          input = node;
        }}
        onKeyUp={e => {
          // Detect if user presses ENTER
          if (e.keyCode == 13) {
            console.log("They pressed ENTER !!! :O");
            dispatch(addTodo(e.target.value));
            e.target.value = "";
          }
        }}
      />
      <button type="submit">
        Add Todo
      </button>
    </form>
  </div>
);

AddTodo = connect()(AddTodo);

export default AddTodo;
