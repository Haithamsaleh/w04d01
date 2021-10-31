import React, { Component } from "react";
import "./style.css";
import Todoitem from "../Todoitem";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "play" },
        { id: 2, name: "sleep" },
      ],
    };
  }

  addTodo = (event) => {
    event.preventDefault();
    if (event.target.task.value) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: this.state.todos.length + 1,
            name: event.target.task.value,
          },
        ],
      });
    }
  };

  


  render() {
    return (
      <div className="Todo">
        <form onSubmit={this.addTodo}>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <>
              Todoitem
                todo={todo}
                key={index}
                
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Todo;