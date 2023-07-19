import React, { useState } from "react";

function TodoForm() {
  const [todoValue, setTodoValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(todoValue);

    setTodoValue("");
  };
  return (
    <>
      <input
        type="text"
        value={todoValue}
        placeholder="Add tasks"
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button onClick={handleClick}>Create task</button>
    </>
  );
}

export default TodoForm;
