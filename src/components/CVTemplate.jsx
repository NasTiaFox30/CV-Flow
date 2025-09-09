import HeaderSections from "./Blocks/HeaderSections";
import AvatarFrame from "./Blocks/AvatarFrame";
import ContactInfo from "./Blocks/ContactInfo";
import AboutMe from "./Blocks/AboutMe";
import Education from "./Blocks/Education";
import WorkExperience from "./Blocks/WorkExperience";
import Skills from "./Blocks/Skills";
import Hobbies from "./Blocks/Hobbies";

export default function CVTemplate() {
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
        <div className="p-8 col-span-2 flex flex-col">
          <HeaderSections />
          <AboutMe />
          <Education />
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}