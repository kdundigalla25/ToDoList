import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoName, setTodoName] = useState("");
  const [count, setCount] = useState(0);

  const handleSubmit = () => {
    if (todoName == "") return;
    setTodos([...todos, todoName]);
    setTodoName("");
    setCount(count + 1);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ToDo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input value={todoName} onChange={(e) => setTodoName(e.target.value)} />
      </form>
      <div className="parent">
        <button className="submitButton" onClick={(e) => handleSubmit()}>
          Submit
        </button>
        <button
          className="clearButton"
          onClick={() => {
            setTodos([]);
          }}
        >
          Clear
        </button>
      </div>
      <div className="listItems">
        {todos.map((todo, i) => (
          <div className="item">
            <p className="item">
              {i + 1}. {todo}
            </p>
            <button
              className="xButton"
              onClick={() =>
                setTodos(todos.filter((innerTodo) => innerTodo != todo))
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
