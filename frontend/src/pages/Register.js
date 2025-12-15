import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/register`, {
        name,
        email,
        password
      });

      if (res.data.success) {
       toast.success("Registered successfully!");
        navigate("/login");  // ⭐ REDIRECT HERE
      } else {
       toast.error(res.data.message);
      }

    } catch (error) {
      toast.error("Something went wrong");
    }
  };

return (
  <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-purple-100">
    
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-80 bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-8"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Create Account
      </h2>

      <input
        className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.03 }}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl shadow-md hover:opacity-90 transition"
        onClick={handleRegister}
      >
        Sign Up
      </motion.button>
    </motion.div>
  </div>
);

}
export default Register;
