import React, { useState, useEffect } from 'react';

function CreateTodo({ user }) {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [itemText, setItemText] = useState('');

  const storageKey = `todos_${user}`; // Unique key for each user

  useEffect(() => {
    // Load saved data on component mount
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const { title, todos } = JSON.parse(saved);
      setTitle(title || '');
      setTodos(todos || []);
    }
  }, [storageKey]);

  const addItem = () => {
    if (!itemText.trim()) return;
    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text: itemText.trim(),
        done: false,
      }
    ]);
    setItemText('');
  };

  const toggleDone = (id) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteItem = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, todos };
    localStorage.setItem(storageKey, JSON.stringify(data));
    console.log(`Saved for ${user}`, data);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Create a New To‑Do List</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="List title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            style={{ width: '100%', marginBottom: '10px' }}
          />
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="New task"
            value={itemText}
            onChange={e => setItemText(e.target.value)}
            style={{ flex: 1 }}
          />
          <button type="button" onClick={addItem} style={{ marginLeft: '5px' }}>
            Add
          </button>
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li key={todo.id} style={{ marginBottom: '8px' }}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(todo.id)}
                style={{ marginRight: '8px' }}
              />
              <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <button
                type="button"
                onClick={() => deleteItem(todo.id)}
                style={{ marginLeft: '10px' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button type="submit">Save List</button>
      </form>
    </div>
  );
}

export default CreateTodo;
