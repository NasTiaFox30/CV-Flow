import { useState } from "react";
import EditableText from "../EditableField";
import AddButton from "../AddField";
import DelButton from "../DelField";
import { useBlockActions } from "../hooks/useBlockActions";
import Icon_phone from "../../assets/icons/phone.svg";
import Icon_email from "../../assets/icons/email.svg";
import Icon_adress from "../../assets/icons/adress.svg";
import Icon_github from "../../assets/icons/github.svg";
import Icon_linkedin from "../../assets/icons/linkedin.svg";
import Icon_website from "../../assets/icons/website.svg";
const iconsList = {
  phone: Icon_phone,
  email: Icon_email,
  address: Icon_adress,
  github: Icon_github,
  linkedin: Icon_linkedin,
  website: Icon_website,
};

export default function ContactInfo({ section, onUpdate }) {
  const [editingIconIndex, setEditingIconIndex] = useState(null);
  const { addItem, updateItem, removeItem } = useBlockActions(section, onUpdate);

  const addNewItem = () => addItem('ContactInfo');
  const handleUpdateItem = (index, field, value) => updateItem(index, field, value);
  const handleRemoveItem = (index) => removeItem(index);

  const handleIconChange = (index, newIconKey) => {
    updateItem(index, 'icon', newIconKey);
    setEditingIconIndex(null);
  };

  return (
    <div className="mt-8 text-sm w-full">
      <EditableText
        tag="h2"
        className="text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 border-gray-200 pb-2"
        value={section.title || "Contact"}
        onUpdate={(text) => onUpdate({ ...section, title: text })}
      />
      
      <div className="space-y-4 text-gray-200">
        {section.items.map((item, index) => {
          const iconKey = item.icon;
          const icon = iconsList[iconKey];
          
          return (
            <div key={index} className="flex items-center relative group">
              <DelButton onClick={() => handleRemoveItem(index)} />
              
              <div className="relative">
                <button
                  onClick={() => setEditingIconIndex(editingIconIndex === index ? null : index)}
                  className="h-5 w-5 mr-3 flex items-center justify-center hover:bg-gray-400 rounded transition-colors"
                >
                  <img src={icon} alt={iconKey} />
                </button>
                
                {editingIconIndex === index && (
                  <div className="absolute right-10 top-0 bg-stone-600 border rounded shadow-lg z-20 p-2 grid grid-6 gap-2">
                    {Object.entries(iconsList).map(([key, iconSrc]) => (
                    <button
                      key={key}
                      onClick={() => handleIconChange(index, key)}
                      className="p-1 h-9 w-9 hover:bg-stone-500 rounded transition-colors"
                      title={key}
                    >
                      <img src={iconSrc} alt={key} className="h-6 w-6" />
                    </button>
                    ))}
                  </div>
                )}
              </div>
              
              <EditableText
                tag="p"
                className="flex-1"
                value={item.value || placeholder}
                onUpdate={(text) => handleUpdateItem(index, 'value', text)}
              />
            </div>
          );
        })}
      </div>

      <AddButton onClick={addNewItem} className="mt-4"></AddButton>
    </div>
  );
}