import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAdd }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 2) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAdd(newTodo);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Descripcion de tarea"
        autoComplete="off"
        className="form-control"
        value={description}
        onChange={handleInputChange}
      />
      <div className="d-grid">
        <button className="btn btn-outline-primary mt-1" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
};
