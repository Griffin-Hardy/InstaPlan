import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import "./Header.css"

const Header = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate()
  return (
    <div className="header-container">
      <div className="img-container">
      <img src="https://i.ibb.co/PCppGwL/logo-png.png"/>
      </div>
      <nav className="link-container">
        <NavLink to="/home" className="link">Home</NavLink>
        <NavLink to="/add" className="link">Add A New Meal</NavLink>
        <NavLink to="/" className="link">Sign in</NavLink>
      <button className="logout-btn" onClick={() => {authCtx.logout(); navigate('/')}}>Logout</button>
      </nav>
    </div>
  );
};

export default Header;
