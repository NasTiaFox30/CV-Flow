import React from "react";

export default function CVTemplate() {
  return (
    <div className="bg-gray-100 flex justify-center py-8">
      <div
        className="bg-white shadow-lg grid grid-cols-3"
        style={{width: "210mm", height: "297mm"}} // A4 format wrap
      >
        {/* Left side */}
        <div className="p-8 bg-stone-800 text-white col-span-1 flex flex-col items-center">
          <img
            src=""
            alt="avatar Profile"
            className="h-60 w-50 object-cover mb-6"
          />
        </div>

        {/* Right side */}
        <div className="p-8 col-span-2 flex flex-col">
          <h1 className="text-5xl font-bold mb-1 font-extrabold tracking-wide">Name Surename</h1>
          <p className="text-gray-500 mb-6 text-lg">Graphic Designer</p>
        </div>
      </div>
    </div>
  );
}