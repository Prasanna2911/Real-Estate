import React from "react";
import { FaHome } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col items-center">
        <FaHome className="text-blue-500 text-6xl animate-spin" />
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
