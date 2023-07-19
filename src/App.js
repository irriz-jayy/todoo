import { ToastContainer } from "react-toastify";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <ToastContainer />
    </div>
  );
}

export default App;
