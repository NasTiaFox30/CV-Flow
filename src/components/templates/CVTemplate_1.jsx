import { useState } from "react";
import CVLayout from "./CVLayout";

export default function CVTemplate_1({ config }) {
  const [leftTopBlocks, setLeftBlocks] = useState(config.left_top);
  const [rightTopBlocks, setRightTopBlocks] = useState(config.right_top);
  const [rightBottomBlocks, setRightBottomBlocks] = useState(config.right_bottom);

  return (
    <div className="bg-gray-100 flex justify-center py-8">
      <div
        className="bg-white shadow-lg grid grid-cols-3"
        style={{width: "210mm", height: "297mm"}} // A4 format wrap
      >
        {/* Left side */}
        <div className="p-8 bg-stone-800 text-white col-span-1 flex flex-col items-center">
          <AvatarFrame />
          <ContactInfo />
          <Skills />
          <Hobbies />
        </div>

        {/* Right side */}
        <div className="col-span-2 flex flex-col">
          <div className="mt-8 p-8 w-full bg-stone-100">
            <HeaderSections />
            <AboutMe />
          </div>
          <div className="m-8">
            <Education />
            <WorkExperience />
          </div>
          
        </div>
      </div>
    </div>
  );
}