import React, { useState } from "react";
import "../App.css";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const [modalTodo, setModalTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(todo);
    if (todo.trim() === "") {
      alert("Cannot add empty task");
      return;
    }

    setTodos([...todos, todo]);
    setTodo("");
    alert("Added");
  };

  const handleEdit = (index) => {
    console.log("edit", index);
    setModalTodo(todos[index]);
    setIsModalOpen(true);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = modalTodo;
    setTodos(updatedTodos);
    setIsModalOpen(false);
    setModalTodo("");
    setEditIndex(null);
    alert("Edited");
  };

  const handleDelete = (index) => {
    console.log("deleted", index);
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    alert("Deleted");
  };

  const handleDone = (index) => {
    console.log("Done task at index:", index);
    const updatedDones = [...dones, todos[index]];
    setDones(updatedDones);
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    alert("Done");
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
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <input
              type="text"
              value={modalTodo}
              onChange={(e) => setModalTodo(e.target.value)}
            />
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoForm;
