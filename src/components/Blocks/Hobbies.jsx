import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EditableText from "../EditableField";
import AddButton from "../AddField";
import DelButton from "../DelField";
import { useBlockActions } from "../hooks/useBlockActions";
import { blockStyles } from "../Templates/blockStyles";

export default function Hobbies({ section, onUpdate, theme }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, updateItem, removeItem } = useBlockActions(section, onUpdate);

  const styles = blockStyles[theme]?.Hobbies || {};

  const addNewItem = () => addItem('Hobbies');
  const handleUpdateItem = (index, field, value) => updateItem(index, field, value);
  const handleRemoveItem = (index) => removeItem(index);

  return (
    <div className="mt-8 text-sm w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <EditableText
        tag="h2"
        className={styles.title || "text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 pb-2"}
        value={section.title || "HOBBIES"}
        onUpdate={(text) => onUpdate({ ...section, title: text })}
      />

      <div className={styles.container || "space-y-4"}>
        {section.items.map((hobby, index) => (
          <div key={index} className={styles.item || "relative group item flex items-center"}>
            <DelButton onClick={() => handleRemoveItem(index)} />
            
            <EditableText
              tag="li"
              className={styles.hobbyText}
              value={hobby.name || hobby.value || hobby}
              onUpdate={(text) => handleUpdateItem(index, 'name', text)}
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