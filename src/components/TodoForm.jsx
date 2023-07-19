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
              <button>Edit</button>
              <button>Delete</button>
              <button>Done</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoForm;
