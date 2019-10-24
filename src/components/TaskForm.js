import React, { useState } from "react";
import PropTypes from "prop-types";

function TaskForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder=" Enter your task"
      />
    </form>
  );
}

 // PropTypes
TaskForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}; 

export default TaskForm;
