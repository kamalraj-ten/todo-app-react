import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Todos from "./components/todos";

class App extends Component {
  state = {
    todos: ["demo todo"],
    stack: [],
  };

  handleDone = (todo) => {
    this.state.stack.push(todo);
    const todos = this.state.todos.filter((t) => t !== todo);
    this.setState({ todos });
    console.log(this.state.stack);
  };

  handleAdd = (content) => {
    const todos = this.state.todos;
    todos[todos.length] = content;
    this.setState({ todos });
  };

  render() {
    return (
      <>
        <Navbar onAdd={this.handleAdd} />
        <Todos onDone={this.handleDone} todos={this.state.todos} />
      </>
    );
  }
}

export default App;
