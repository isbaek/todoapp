import React from "react";
//import VisibleTodoList from './components/ListToDo'
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Title from "./components/Title";
import "./stylesheets/main.css";

class App extends React.Component {
  render() {
    return (
      <div className="Todoapp">
        <Title />
        <AddTodo />
        <Todos />
      </div>
    );
  }
}

export default App;
