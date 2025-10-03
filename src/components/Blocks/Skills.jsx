import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EditableText from "../EditableField";
import AddButton from "../AddField";
import DelButton from "../DelField";
import SkillBar from "./SkillBar";
import { useBlockActions } from "../hooks/useBlockActions";
import { blockStyles } from "../Templates/blockStyles";

export default function Skills({ section, onUpdate, theme }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, updateItem, removeItem } = useBlockActions(section, onUpdate);

  const styles = blockStyles[theme]?.Skills || {};

  const addNewItem = () => addItem("Skills");
  const handleUpdateItem = (index, field, value) => updateItem(index, field, value);
  const handleRemoveItem = (index) => removeItem(index);

  return (
    <div className="mt-8 text-sm w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <EditableText
        tag="h2"
        className={styles.title}
        value={section.title || "Skills"}
        onUpdate={(text) => onUpdate({ ...section, title: text })}
      />
      
      <div className="space-y-2">
        {section.items.map((skill, index) => (
          <div key={index} className={`relative group item ${styles.item}`}>
            <DelButton onClick={() => handleRemoveItem(index)} />
            
            <SkillBar 
              name={skill.name} 
              level={skill.level}
              onNameChange={(text) => handleUpdateItem(index, 'name', text)}
              onLevelChange={(value) => handleUpdateItem(index, 'level', value)}
              variant={styles.variant}
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