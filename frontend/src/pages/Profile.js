import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(`${process.env.REACT_APP_API_URL}/api/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          toast.error("Please login first");
        }
      });
  }, []);

  // EDIT PROFILE
  const goToEdit = () => {
    window.location.href = "/edit-profile";
  };

  // CHANGE PASSWORD
  const goToChangePassword = () => {
    window.location.href = "/change-password";
  };

  // DELETE ACCOUNT
  const handleDelete = async () => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Are you sure you want to delete your account?")) {
      return;
    }

    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/users/delete`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.data.success) {
      toast.success("Account deleted successfully");

      localStorage.removeItem("token");
      window.location.href = "/login";
    } else {
      toast.error(res.data.message);
    }
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-100 to-blue-100">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-10 w-96 text-center"
      >
        {/* Avatar Animation */}
        <motion.img
          src="https://i.imgur.com/0y8Ftya.png"
          alt="avatar"
          className="w-28 h-28 rounded-full mx-auto mb-6 shadow-md"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* User Info */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">{user?.name}</h2>
        <p className="text-gray-600 mb-6">{user?.email}</p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">

          {/* Edit Profile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToEdit}
            className="bg-blue-500 text-white py-2 rounded-xl shadow-md hover:bg-blue-600 transition"
          >
            Edit Profile
          </motion.button>

          {/* Change Password */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToChangePassword}
            className="bg-indigo-500 text-white py-2 rounded-xl shadow-md hover:bg-indigo-600 transition"
          >
            Change Password
          </motion.button>

          {/* Delete Account */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleDelete}
            className="bg-red-500 text-white py-2 rounded-xl shadow-md hover:bg-red-600 transition"
          >
            Delete Account
          </motion.button>

          {/* Logout */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLogout}
            className="bg-gray-700 text-white py-2 rounded-xl shadow-md hover:bg-gray-800 transition"
          >
            Logout
          </motion.button>

        </div>
      </motion.div>
    </div>
  );
}

export default Profile;
