import React from "react";
//import VisibleTodoList from './components/ListToDo'
import Todos from "./components/ListToDo";
import AddTodo from "./components/AddToDo";
import Title from "./components/Title";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <AddTodo />
        <Todos />
      </div>
    );
  }
}

export default App;
