import { useState } from "react";
import CVLayout from "./CVLayout";

export default function CVTemplate({ config }) {
  const [leftTopBlocks, setLefToptBlocks] = useState(config.left_top);
  const [leftBottomBlocks, setLeftBottomBlocks] = useState(config.left_bottom);
  const [rightTopBlocks, setRightTopBlocks] = useState(config.right_top);
  const [rightBottomBlocks, setRightBottomBlocks] = useState(config.right_bottom);
  const theme = "template2";

  return (
    <div className="bg-gray-100 flex justify-center py-8">
      <div
        className="bg-white shadow-lg grid grid-cols-5"
        style={{width: "210mm", height: "297mm"}} // A4 format wrap
      >
        {/* Left side */}
        <div className="relative col-span-2 flex flex-col h-full">
          <div className="absolute mt-41 w-full h-30 bg-stone-800"></div>
          <CVLayout
            areas={[
              {
                id: "left-top-area",
                className: "pt-15 p-10 bg-gray-100 text-white ",
                blocks: leftTopBlocks,
                setBlocks: setLefToptBlocks,
              },
              {
                id: "left-bottom-area",
                className: "pt-0 p-15 bg-gray-100 h-full",
                blocks: leftBottomBlocks,
                setBlocks: setLeftBottomBlocks,
              },
            ]}
            theme={theme}
          />
        </div>

        {/* Right side */}
        <div className="col-span-3 flex flex-col h-full">
          <CVLayout
            areas={[
              {
                id: "right-top-area",
                className: "mt-8 p-10 pb-0 w-full bg-white",
                blocks: rightTopBlocks,
                setBlocks: setRightTopBlocks,
              },
              {
                id: "right-bottom-area",
                className: "pt-0 p-10 bg-stone-800 text-white h-full",
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