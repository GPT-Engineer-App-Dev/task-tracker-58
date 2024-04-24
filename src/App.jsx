import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input type="text" className="input input-bordered w-full" placeholder="Add a new task" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="menu bg-base-100 w-full p-2 rounded-box">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{todo}</span>
            <button className="btn btn-ghost btn-circle" onClick={() => handleDeleteTodo(index)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
