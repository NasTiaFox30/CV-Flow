import React from "react";

export default function CVTemplate() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg grid grid-cols-3">
      {/* Left side */}
      <div className="p-8 bg-stone-800 text-white col-span-1">
        <div className="flex flex-col items-center">
          <img
            src=""
            alt="avatar Profile"
            className="h-60 w-50 object-cover mb-6"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="p-8 col-span-2">
        <h1 className="text-3xl font-bold">Name Surename</h1>
        <p className="text-gray-500 mb-4">Graphic Designer</p>

      </div>
    </div>
  );
};