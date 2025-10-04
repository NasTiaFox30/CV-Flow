// CVTemplate_1.jsx
import React from "react";
import CVLayout from "./CVLayout";

export default function CVTemplate_1({ config, instances, onUpdateArea, onUpdateInstance, onRemoveInstance }) {
  const theme = "template1";
  
  const areas = [
    {
      id: "left_top",
      className: "p-8 bg-stone-800 text-gray-200 col-span-1 flex flex-col",
      blocks: config.left_top || [],
    },
  ];

  const rightAreas = [
    {
      id: "right_top",
      className: "mt-8 p-8 w-full bg-stone-100",
      blocks: config.right_top || [],
    },
    {
      id: "right_bottom",
      className: "m-8",
      blocks: config.right_bottom || [],
    },
  ];

  return (
    <div className="bg-gray-100 flex justify-center py-8">
      <div
        className="bg-white shadow-lg grid grid-cols-3"
        style={{width: "210mm", height: "297mm"}} // A4 format wrap
      >
        {/* Left side */}
        <CVLayout
          areas={areas}
          instances={instances}
          onUpdateInstance={onUpdateInstance}
          onRemoveInstance={onRemoveInstance}
          theme={theme}
        />

        {/* Right side */}
        <div className="col-span-2 flex flex-col">
          <CVLayout
            areas={rightAreas}
            instances={instances}
            onUpdateInstance={onUpdateInstance}
            onRemoveInstance={onRemoveInstance}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}
