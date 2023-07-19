import { ToastContainer } from "react-toastify";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <h2>To-do app</h2>
      <TodoForm />
      <ToastContainer />
    </div>
  );
}

export default App;
