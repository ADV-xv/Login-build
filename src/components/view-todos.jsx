import React, { useEffect, useState } from "react";

function ViewTodos() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth")) || {};
    const user = auth.username;
    setUsername(user);

    if (user) {
      const saved = JSON.parse(localStorage.getItem(`todos_${user}`));
      if (saved) {
        setTodos(saved.todos || []);
        setTitle(saved.title || "");
      }
    }
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>{username ? `${username}'s Saved To‑Do List` : "Saved Todos"}</h2>
      <h3>{title}</h3>
      {todos.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{ marginBottom: "10px" }}>
              <input type="checkbox" checked={todo.done} readOnly />
              <span
                style={{
                  textDecoration: todo.done ? "line-through" : "none",
                  marginLeft: "8px"
                }}
              >
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewTodos;
