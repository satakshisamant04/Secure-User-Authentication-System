import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, {
        email,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        navigate("/profile");
      } else {
        toast.error(res.data.message);

      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-blue-100">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-80 bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-8"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>

        <motion.input
          whileFocus={{ scale: 1.02 }}
          className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <motion.input
          whileFocus={{ scale: 1.02 }}
          className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-xl shadow-md hover:opacity-90 transition"
          onClick={handleLogin}
        >
          Login
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Login;
