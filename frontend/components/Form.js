import React, { useState } from 'react';

export default function Form() {
  const [input, setInput] = useState(''); // For handling input field
  const [todos, setTodos] = useState([]); // For storing todo list

  const handleInputChange = (e) => {
    setInput(e.target.value); // Update input value when user types
  };

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, id: Date.now(), completed: false }]); // Add new todo
      setInput(''); // Clear input field after submission
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo(); // Trigger add todo on pressing Enter
    }
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed)); // Filter out completed todos
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )); // Toggle completion status of the todo
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearCompleted}>Clear Completed</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            {todo.completed ? (
              <span style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}>✓</span>
            ) : (
              todo.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

