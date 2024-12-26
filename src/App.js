import "./App.css";
import Todo from "./components/Todo";
function App() {
  return (
    <div className="App">
      <h1 className="todo-title">Taskify</h1>
      <p className="todo-subtitle">Organize your tasks efficiently</p>
      <Todo />
    </div>
  );
}

export default App;
