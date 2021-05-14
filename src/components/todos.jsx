import React, { Component } from "react";
import Todo from "./todo";

class Todos extends Component {
  render() {
    return (
      <div className="container-fluid todo-container">
        {this.props.todos.length === 0 && (
          <p className="bg-light">You have completed all the works!!!</p>
        )}
        {this.props.todos.map((todo) => {
          return <Todo key={todo} onDone={this.props.onDone} todo={todo} />;
        })}
      </div>
    );
  }
}

export default Todos;
