import React, { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleClick = () => {
    setUser(null);
    history.push("/login");
  };

  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-danger" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
