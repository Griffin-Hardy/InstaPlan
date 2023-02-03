import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate()
  return (
    <div>
      <nav>
        <NavLink to="/">Sign in</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/add">Add a new week</NavLink>
      </nav>
      <button onClick={() => {authCtx.logout(); navigate('/')}}>Logout</button>
    </div>
  );
};

export default Header;
