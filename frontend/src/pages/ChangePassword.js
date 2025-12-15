import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/users/change-password`,
      { oldPassword, newPassword },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (res.data.success) {
      toast.success("Password updated successfully!");
      navigate("/profile");
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-yellow-50 to-purple-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-10 w-96"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Change Password
        </h2>

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="password"
          placeholder="Old Password"
          className="w-full p-3 border rounded-xl mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="password"
          placeholder="New Password"
          className="w-full p-3 border rounded-xl mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-xl shadow-md"
          onClick={handleChangePassword}
        >
          Update Password
        </motion.button>
      </motion.div>
    </div>
  );
}

export default ChangePassword;
