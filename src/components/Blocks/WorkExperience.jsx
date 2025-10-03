import EditableText from "../EditableField";
import AddButton from "../AddField";
import DelButton from "../DelField";
import { useBlockActions } from "../hooks/useBlockActions";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { blockStyles } from "../Templates/blockStyles";

export default function WorkExperience({ section, onUpdate, theme }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, updateItem, removeItem } = useBlockActions(section, onUpdate);

  const styles = blockStyles[theme]?.WorkExperience || {};

  const addNewItem = () => addItem('WorkExperience');
  const handleUpdateItem = (index, field, value) => updateItem(index, field, value);
  const handleRemoveItem = (index) => removeItem(index);

  return (
    <div className="py-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <EditableText
        tag="h2"
        className={styles.title}
        value={section.title}
        onUpdate={(text) => onUpdate({ ...section, title: text })}
      />

      <div className={styles.itemsContainer}>
        {section.items.map((item, index) => (
          <div key={index} className={styles.item}>
            
            <DelButton onClick={() => handleRemoveItem(index)} />
            
            <div className={styles.leftColumn}>
              <EditableText
                tag="p"
                className={styles.period}
                value={item.period}
                onUpdate={(text) => handleUpdateItem(index, 'period', text)}
              />
              <EditableText
                tag="p"
                className={styles.position}
                value={item.position}
                onUpdate={(text) => handleUpdateItem(index, 'position', text)}
              />
            </div>

            <div className={styles.rightColumn}>
              <EditableText
                tag="p"
                className={styles.company}
                value={item.company}
                onUpdate={(text) => handleUpdateItem(index, 'company', text)}
              />
              <EditableText
                tag="p"
                className={styles.description}
                value={item.description}
                onUpdate={(text) => handleUpdateItem(index, 'description', text)}
              />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isHovered && <AddButton onClick={addNewItem} />}
      </AnimatePresence>
    </div>
  );
}
