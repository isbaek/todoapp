import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../constants/actions";

/*
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add To do
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)
*/

const AddTodo = ({ onChange }) => (
  <div>
    <h3>New</h3>
    <input type="text" onKeyUp={onChange} />
  </div>
);

export default AddTodo;
