import React from "react";

export const TodoListItem = ({ todo, index, handleToggler, handleDelete }) => {
  return (
    <li className="list-group-item" key={todo.id}>
      <p
        className={todo.done ? "complete" : ""}
        onClick={() => handleToggler(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
