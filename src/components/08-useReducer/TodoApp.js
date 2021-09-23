import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = () => {
  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: "Aprender React",
  //     done: false,
  //   },
  // ];

  return JSON.parse(localStorage.getItem("TODOS")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  const handleToggler = (id) => {
    const toggleTodoAction = {
      type: "toggleDone",
      payload: id,
    };

    dispatch(toggleTodoAction);
  };

  const handleDelete = (todoId) => {
    const deleteTodoAction = {
      type: "delete",
      payload: todoId,
    };

    dispatch(deleteTodoAction);
  };

  const handleAdd = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <>
      <h1>Todo APP (Total: {todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodosList, todos, handleDelete, handleToggler */}
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggler={handleToggler}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          {/* Form, handleSubmit, handleInputChange, description */}
          <TodoAdd handleAdd={handleAdd} />
        </div>
      </div>
    </>
  );
};
