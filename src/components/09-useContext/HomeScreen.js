import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />

      <h4>Bienvenido {user?.name}</h4>
    </div>
  );
};
