import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user);
        }
      });
  }, []);

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/users/update`,
      { name: user.name, email: user.email },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (res.data.success) {
      toast.success("Profile updated successfully!");
      navigate("/profile");
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-yellow-100 to-blue-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-10 w-96"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Edit Profile
        </h2>

        <input
          className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl shadow-md hover:opacity-90"
          onClick={handleUpdate}
        >
          Update Profile
        </motion.button>
      </motion.div>
    </div>
  );
}

export default EditProfile;