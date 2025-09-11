import EditableText from "../EditableField";
import AddButton from "../AddField";
import DelButton from "../DelField";
import { useBlockActions } from "../hooks/useBlockActions";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Education({ section, onUpdate }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, updateItem, removeItem } = useBlockActions(section, onUpdate);

  const addNewItem = () => addItem('Education');
  const handleUpdateItem = (index, field, value) => updateItem(index, field, value);
  const handleRemoveItem = (index) => removeItem(index);

  return (
    <div className="mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <EditableText
        tag="h2"
        className="text-xl font-bold uppercase border-b pb-2 mb-4"
        value={section.title}
        onUpdate={(text) => onUpdate({ ...section, title: text })}
      />

      <div className="space-y-4">
        {section.items.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 relative group item">
            
            <DelButton onClick={() => handleRemoveItem(index)} />
            
            <div>
              <EditableText
                tag="p"
                className="font-semibold"
                value={item.period}
                onUpdate={(text) => handleUpdateItem(index, 'period', text)}
              />
              <EditableText
                tag="p"
                className="text-gray-500"
                value={item.degree}
                onUpdate={(text) => handleUpdateItem(index, 'degree', text)}
              />
            </div>

            <div>
              <EditableText
                tag="p"
                className="font-bold"
                value={item.university}
                onUpdate={(text) => handleUpdateItem(index, 'university', text)}
              />
              <EditableText
                tag="p"
                className="text-gray-600 text-sm"
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
