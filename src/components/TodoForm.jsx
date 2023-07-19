import React, { useState } from "react";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

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
  };

  const handleDone = (index) => {
    console.log("done", index);
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
    </>
  );
}

export default TodoForm;
