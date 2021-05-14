import React, { Component } from "react";
import "../App.css";

class Todo extends Component {
  render() {
    return (
      <div className="card mt-2">
        <div className="card-body">
          <h3>{this.props.todo}</h3>
          <span className="fr">
            <button
              onClick={() => {
                this.props.onDone(this.props.todo);
              }}
              className="btn btn-primary mr-4"
            >
              done
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Todo;
