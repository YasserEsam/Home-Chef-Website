import React from "react";

const spinner = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-10">
      {/* Plate Background */}
      <div className="relative w-16 h-16 rounded-full bg-white border-8 border-gray-300">
        <div className="absolute top-2 left-2 right-2 bottom-2 bg-orange-300 rounded-full animate-spin-slow"></div>
        <div className="absolute top-3 left-3 right-3 bottom-3 bg-red-500 rounded-full animate-spin-slow"></div>

        {/* Food Icon (like a fork or plate symbol) */}
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-xl text-white">🍔</span>
        </div>
      </div>
      <div className="text-lg font-medium text-gray-700">Loading...</div>
    </div>
  );
};

export default spinner;
