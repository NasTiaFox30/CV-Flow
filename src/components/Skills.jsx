import EditableText from "./EditableField";
import SkillBar from "./SkillBar";

const skillsData = [
  { name: "Photoshop", level: 90 },
  { name: "Illustrator", level: 75 },
  { name: "Figma", level: 85 },
  { name: "React", level: 60 }
];

export default function Skills() {
  return (
    <div className="mt-8 text-sm w-full">
      {/* <h2 className="text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 border-gray-200 pb-2">Skills</h2> */}
      <EditableText
        tag="h2"
        className="text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 border-gray-200 pb-2"
        value="Skills"
        onUpdate={(text) => onUpdate({ ...section, content: text })}
      />
      
      {skillsData.map((skill, index) => (
        <SkillBar 
          key={index}
          name={skill.name} 
          level={skill.level} 
        />
      ))}
    </div>
  );
};