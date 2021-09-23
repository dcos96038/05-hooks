import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleToggler, handleDelete }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        // TodoListItem, todo, index, handleToggler, handleDelete
        <TodoListItem
          todo={todo}
          index={i}
          handleToggler={handleToggler}
          handleDelete={handleDelete}
          key={todo.id}
        />
      ))}
    </ul>
  );
};
