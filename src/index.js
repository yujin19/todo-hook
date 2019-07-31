import React, { useState } from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn more about react",
      isCompleted: false
    },
    {
      text: "Learn more about redux",
      isCompleted: false
    },
    {
      text: "Learn more about dart",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
