import { useState } from "react";
import CVLayout from "./CVLayout";

export default function CVTemplate_1({ config }) {
  const [leftTopBlocks, setLeftBlocks] = useState(config.left_top);
  const [rightTopBlocks, setRightTopBlocks] = useState(config.right_top);
  const [rightBottomBlocks, setRightBottomBlocks] = useState(config.right_bottom);
  const theme = "template1";

  return (
    <div className="bg-gray-100 flex justify-center py-8">
      <div
        className="bg-white shadow-lg grid grid-cols-3"
        style={{width: "210mm", height: "297mm"}} // A4 format wrap
      >
        {/* Left side */}
        <CVLayout
          areas={[
            {
              id: "left-top-area",
              className: "p-8 bg-stone-800 text-gray-200 col-span-1 flex flex-col",
              blocks: leftTopBlocks,
              setBlocks: setLeftBlocks,
            },
          ]}
          theme={theme}
        />

        {/* Right side */}
        <div className="col-span-2 flex flex-col">
          <CVLayout
            areas={[
              {
                id: "right-top-area",
                className: "mt-8 p-8 w-full bg-stone-100",
                blocks: rightTopBlocks,
                setBlocks: setRightTopBlocks,
              },
              {
                id: "right-bottom-area",
                className: "m-8",
                blocks: rightBottomBlocks,
                setBlocks: setRightBottomBlocks,
              },
            ]}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}