import React, { Component } from "react";

class Navbar extends Component {
  handleAdd = (e) => {
    e.preventDefault();
    let eleTodo = document.getElementById("input-todo");
    this.props.onAdd(eleTodo.value);
    eleTodo.value = "";
  };

  render() {
    return (
      <header>
        <nav className="navbar bg-light">
          <h1 className="navbar-brand page-title">Todo List</h1>
          <div className="container">
            <form className="d-flex">
              <input
                className="form-control me-2"
                placeholder="new todo"
                size="100"
                id="input-todo"
              ></input>
              <input
                type="reset"
                value="add"
                className="btn btn-outline-secondary ml-4"
                onClick={this.handleAdd}
              ></input>
            </form>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
