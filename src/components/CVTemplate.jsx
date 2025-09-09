import HeaderSections from "./Blocks/HeaderSections";
import AvatarFrame from "./Blocks/AvatarFrame";
import ContactInfo from "./Blocks/ContactInfo";
import AboutMe from "./Blocks/AboutMe";
import Education from "./Blocks/Education";
import WorkExperience from "./Blocks/WorkExperience";
import Skills from "./Blocks/Skills";
import Hobbies from "./Blocks/Hobbies";
import female_avatar from "../assets/avatars/Female_avatar.png";
import male_avatar from "../assets/avatars/Male_avatar.png";
import EditableText from "./EditableField";

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
            src={female_avatar}
            alt="avatar Profile"
            className="h-60 w-50 object-cover mb-6"
          />
          
          <ContactInfo />
          <Skills />
          <Hobbies />
        </div>

        {/* Right side */}
        <div className="p-8 col-span-2 flex flex-col">
          {/* <h1 className="text-5xl font-bold mb-1 font-extrabold tracking-wide">Name Surename</h1> */}
          <EditableText
            tag="h1"
            className="text-5xl font-bold mb-1 font-extrabold tracking-wide"
            value="Name Surename"
            onUpdate={(text) => onUpdate({ ...section, content: text })}
          />

          {/* <p className="text-gray-500 mb-6 text-lg">Graphic Designer</p> */}
          <EditableText
            tag="p"
            className="text-gray-500 mb-6 text-lg"
            value="COMPANY OF LOREM IPSUM"
            onUpdate={(text) => onUpdate({ ...section, content: text })}
          />

          <AboutMe />
          <Education />
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}