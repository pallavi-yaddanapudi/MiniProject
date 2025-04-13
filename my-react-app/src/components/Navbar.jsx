import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Check if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    navigate("/"); // Redirect to home page
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./Donation.png" alt="Donation Logo" className="logo-icon" />
        <h1 className="logo">Smart Donation System</h1>
      </div>
      <ul className="nav-links">
        {!token ? ( // Show Signup and Login only if user is not logged in
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
