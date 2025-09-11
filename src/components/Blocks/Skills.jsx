import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EditableText from "../EditableField";
import AddButton from "../AddField";
import DelButton from "../DelField";
import SkillBar from "./SkillBar";
import { useBlockActions } from "../hooks/useBlockActions";

export default function Skills({ section, onUpdate }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, updateItem, removeItem } = useBlockActions(section, onUpdate);

  const addNewItem = () => addItem('Skills');
  const handleUpdateItem = (index, field, value) => updateItem(index, field, value);
  const handleRemoveItem = (index) => removeItem(index);

  return (
    <div className="mt-8 text-sm w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <EditableText
        tag="h2"
        className="text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 border-gray-200 pb-2"
        value={section.title || "Skills"}
        onUpdate={(text) => onUpdate({ ...section, title: text })}
      />
      
      <div className="space-y-2">
        {section.items.map((skill, index) => (
          <div key={index} className="relative group item">
            <DelButton onClick={() => handleRemoveItem(index)} />
            
            <SkillBar 
              name={skill.name} 
              level={skill.level}
              onNameChange={(text) => handleUpdateItem(index, 'name', text)}
              onLevelChange={(value) => handleUpdateItem(index, 'level', value)}
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isHovered && <AddButton onClick={addNewItem} />}
      </AnimatePresence>
    </div>
  );
}