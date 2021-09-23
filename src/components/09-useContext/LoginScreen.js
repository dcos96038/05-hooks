import React, { useContext } from "react";
import { useHistory } from "react-router";
import { useForm } from "../../hooks/useForm";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const [{ name, email }, handleInputChange, reset] = useForm({
    name: "",
    email: "",
  });

  const { setUser } = useContext(UserContext);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length <= 4 && email.trim().length <= 6) {
      return;
    }

    const newUser = {
      id: new Date().getTime(),
      name: name,
      email: email,
    };

    setUser(newUser);
    history.push("/");
  };

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          className="form-control my-3"
          placeholder="Correo"
          value={email}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
