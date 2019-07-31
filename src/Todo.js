import React, { useState } from "react";
import ReactDOM from "react-dom";

function Todo({ todo, index, completeTodo, removeTodo }) {
  // completeTodo = index => {
  //   todo
  // }
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
}

export default Todo;
