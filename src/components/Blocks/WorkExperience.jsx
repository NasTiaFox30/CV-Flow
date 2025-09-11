import EditableText from "../EditableField";
import AddButton from "../AddField";
import DelButton from "../DelField";
import { useBlockActions } from "../hooks/useBlockActions";

export default function WorkExperience({ section, onUpdate }) {
  const { addItem, updateItem, removeItem } = useBlockActions(section, onUpdate);

  const addNewItem = () => addItem('WorkExperience');
  const handleUpdateItem = (index, field, value) => updateItem(index, field, value);
  const handleRemoveItem = (index) => removeItem(index);

  return (
    <div className="mb-6">
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
                value={item.position}
                onUpdate={(text) => handleUpdateItem(index, 'position', text)}
              />
            </div>

            <div>
              <EditableText
                tag="p"
                className="font-bold"
                value={item.company}
                onUpdate={(text) => handleUpdateItem(index, 'company', text)}
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

      <AddButton onClick={addNewItem} />
    </div>
  );
}
