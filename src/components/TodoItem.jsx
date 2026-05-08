import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <span
        className={todo.completed ? "todo-text completed" : "todo-text"}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>

      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}
