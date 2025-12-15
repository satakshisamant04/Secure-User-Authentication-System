import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/70 backdrop-blur-lg shadow-md p-4 flex gap-6 justify-center"
    >
      <motion.span whileHover={{ scale: 1.08 }}>
        <Link className="font-semibold text-gray-700 hover:text-blue-600" to="/">
          Register
        </Link>
      </motion.span>

      <motion.span whileHover={{ scale: 1.08 }}>
        <Link className="font-semibold text-gray-700 hover:text-blue-600" to="/login">
          Login
        </Link>
      </motion.span>

      {token && (
        <>
          <motion.span whileHover={{ scale: 1.08 }}>
            <Link className="font-semibold text-gray-700 hover:text-blue-600" to="/profile">
              Profile
            </Link>
          </motion.span>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded-xl hover:bg-red-600 shadow-sm"
          >
            Logout
          </motion.button>
        </>
      )}
    </motion.nav>
  );
}

export default Navbar;
