import React from "react";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

function Task({ todo, index, completeTodo, removeTodo }) {
  "[";
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div>
        <input
          type="checkbox"
          onChange={() => completeTodo(index)}
          checked={todo.isCompleted ? "checked" : ""}
        />{" "}
      </div>
     {todo.text}
      <div>
        <IconButton size="small" onClick={() => removeTodo(index)}>
          <Delete />
        </IconButton>
        <button>{todo.isCompleted ? "Completed" : "To be Done"}</button>
      </div>
    </div>
  );
}

// PropTypes
Task.propTypes = {
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
}; 

export default Task;
