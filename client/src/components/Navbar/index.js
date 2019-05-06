import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>

    <ul className="nav nav-tabs">
      
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
          Log In
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/subjects" className={window.location.pathname === "/subjects" ? "nav-link active" : "nav-link"}>
          Subjects
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/research" className={window.location.pathname === "/research" ? "nav-link active" : "nav-link"}>
          Research
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/myproject" className={window.location.pathname === "/myproject" ? "nav-link active" : "nav-link"}>
          My Project
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/dashboard" className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
          Dashboard
        </Link>
      </li>
    
    </ul>
    </div>
  );
}

export default Navbar;
