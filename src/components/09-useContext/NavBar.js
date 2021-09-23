import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./UserContext";

export const NavBar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext App
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact activeClassName="active" className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink
              activeClassName="active"
              className={"nav-link " + (user !== null ? "disabled" : "")}
              to="/login"
            >
              Login
            </NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/about">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
