import React, { Component } from "react";
import "./style.css";

class Todoitem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todoitem">
        <li>{this.props.todo.name}</li>
      </div>
    );
  }
}
export default Todoitem;