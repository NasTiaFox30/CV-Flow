import CVLayout from "./CVLayout";

export default function CVTemplate_1({config, instances, onUpdateInstance, onRemoveInstance}) {
  const theme = "template1";

  const areasScheme = {
    left: [
      {
        id: "left_top",
        className: "p-8 bg-stone-800 text-gray-200 col-span-1 flex flex-col",
      },
    ],
    right: [
      {
        id: "right_top",
        className: "mt-8 p-8 w-full bg-stone-100",
      },
      {
        id: "right_bottom",
        className: "m-8",
      },
    ],
  };

  return (
    <div id="resume_print" className="bg-gray-100 flex justify-center py-8 print:p-0">
      <div
        className="bg-white shadow-lg grid grid-cols-3"
        style={{width: "210mm", height: "297mm"}} // A4 format wrap
      >
        {/* Left side */}
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

        {/* Right side */}
        <div className="col-span-2 flex flex-col">
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
