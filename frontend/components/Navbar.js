import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link style={{ marginRight: "10px" }} to="/">
        Register
      </Link>

      <Link style={{ marginRight: "10px" }} to="/login">
        Login
      </Link>

      {token && (
        <>
          <Link style={{ marginRight: "10px" }} to="/profile">
            Profile
          </Link>

          <button style={{ marginLeft: "10px" }} onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
