import React, { useState } from "react";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(todo);

    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleEdit = (index) => {
    console.log("edit", index);
  };

  const handleDelete = (index) => {
    console.log("deleted", index);
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleDone = (index) => {
    console.log("done", index);
    const updatedTodos = todos.filter((_, i) => i !== index);
    setDones(updatedTodos);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={todo}
          placeholder="Add tasks"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleClick}>Create task</button>
      </div>
      <div>
        <h2>Todo</h2>
        <ul>
          {todos.map((todo, index) => (
            <div key={index}>
              <li>{todo}</li>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleDone(index)}>Done</button>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h2>Done</h2>
        <ul>
          {dones.map((done, index) => (
            <div key={index}>
              <li>{done}</li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoForm;
