import React from "react";

function SkeletonProfile() {
  return (
    <div className="animate-pulse bg-white/70 backdrop-blur-xl shadow-lg rounded-2xl p-10 w-96 text-center">
      {/* Avatar skeleton */}
      <div className="w-28 h-28 bg-gray-300 rounded-full mx-auto mb-6"></div>

      {/* Name skeleton */}
      <div className="h-5 bg-gray-300 rounded w-40 mx-auto mb-3"></div>

      {/* Email skeleton */}
      <div className="h-4 bg-gray-300 rounded w-56 mx-auto mb-6"></div>

      {/* Button skeletons */}
      <div className="h-10 bg-gray-300 rounded-xl w-full mb-4"></div>
      <div className="h-10 bg-gray-300 rounded-xl w-full mb-4"></div>
      <div className="h-10 bg-gray-300 rounded-xl w-full mb-4"></div>
      <div className="h-10 bg-gray-300 rounded-xl w-full"></div>
    </div>
  );
}

export default SkeletonProfile;
