import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/recipes">
      My Recipes
    </NavLink>
    <NavLink className="link" to="/add-recipe">
      Add Recipe
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

// const alwaysOptions = (
//   <>
//   </>
// );

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          My Recipe Book
        </NavLink>
        {/* <img className="salad-logo" src="https://i.imgur.com/yGz0wMf.png"></img> */}
        <div className="links">
          {/* {user && <div className="link welcome">Welcome, {user.username}</div>} */}
          {/* {alwaysOptions} */}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
