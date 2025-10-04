import CVLayout from "./CVLayout";

export default function CVTemplate_2({config, instances, onUpdateInstance, onRemoveInstance}) {
  const theme = "template2";

  const areasScheme = {
    left: [
      {
        id: "left_top",
        className: "pt-15 p-10 bg-gray-100 text-white",
      },
      {
        id: "left_bottom",
        className: "pt-0 p-15 bg-gray-100 h-full",
      },
    ],
    right: [
      {
        id: "right_top",
        className: "mt-8 p-10 pb-0 w-full bg-white",
      },
      {
        id: "right_bottom",
        className: "pt-0 p-10 bg-stone-800 text-white h-full",
      },
    ],
  };

  return (
    <div id="resume_print" className="bg-gray-100 flex justify-center py-8 print:p-0">
      <div
        className="bg-white shadow-lg grid grid-cols-5"
        style={{width: "210mm", height: "297mm"}} // A4 format wrap
      >
        {/* Left side */}
        <div className="relative col-span-2 flex flex-col h-full">
          <div className="absolute mt-41 w-full h-30 bg-stone-800"></div>
          <CVLayout
            areas={areasScheme.left.map((a) => ({
              ...a,
              blocks: config[a.id] || [],
            }))}
            instances={instances}
            onUpdateInstance={onUpdateInstance}
            onRemoveInstance={onRemoveInstance}
            theme={theme}
          />
        </div>

        {/* Right side */}
        <div className="col-span-3 flex flex-col h-full">
          <CVLayout
            areas={areasScheme.right.map((a) => ({
              ...a,
              blocks: config[a.id] || [],
            }))}
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