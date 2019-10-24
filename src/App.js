import React, { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import "./App.css";
import PropTypes from "prop-types";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is my first task",
      isCompleted: false
    },
    {
      text: "This is my second task",
      isCompleted: false
    },
    
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
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
        <h1 className="title">Todo List Web Application</h1>
        <TaskForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Task
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

// PropTypes
App.propTypes = {
  text: PropTypes.string,
  isCompleted : PropTypes.bool
}; 

export default App;
