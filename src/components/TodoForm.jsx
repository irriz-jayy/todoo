import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      toast.error("Cannot add empty task");
      return;
    }

    setTodos([...todos, todo]);
    setTodo("");
    toast.success("Task added successfully🎉");
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
    toast.success("Successfully edited task🎉");
  };

  const handleDelete = (index) => {
    console.log("deleted", index);
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    toast.error("Task deleted 🚮");
  };

  const handleDone = (index) => {
    console.log("Done task at index:", index);
    const updatedDones = [...dones, todos[index]];
    setDones(updatedDones);
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    toast.success("Task done ✅");
  };

  return (
    <>
      <div className="container">
        <h2 className="heading">To-do app</h2>
        <div>
          <input
            type="text"
            value={todo}
            className="search"
            placeholder="Add tasks"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="button" onClick={handleClick}>
            Create task
          </button>
        </div>
        <div>
          <h2 className="second">To be done</h2>
          <ul>
            {todos.map((todo, index) => (
              <div key={index} className="todos">
                <li>{todo}</li>
                <button className="edit" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
                <button className="donebtn" onClick={() => handleDone(index)}>
                  Done
                </button>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="done">Already done</h2>
          <ul>
            {dones.map((done, index) => (
              <div key={index} className="todosdone">
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
              <button className="edit" onClick={handleSaveEdit}>
                Save
              </button>
              <button className="delete" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TodoForm;
