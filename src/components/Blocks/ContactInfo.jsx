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
  const { addItem, updateItem, removeItem } = useBlockActions(section, onUpdate);

  const addNewItem = () => addItem('ContactInfo');
  const handleUpdateItem = (index, field, value) => updateItem(index, field, value);
  const handleRemoveItem = (index) => removeItem(index);

  const getContactType = (index) => {
    const types = ['phone', 'email', 'address'];
    return types[index] || 'other';
  };

  const getIcon = (type) => {
    switch (type) {
      case 'phone': return Icon_phone;
      case 'email': return Icon_email;
      case 'address': return Icon_adress;
      default: return Icon_phone;
    }
  };

  const getPlaceholder = (type) => {
    switch (type) {
      case 'phone': return "+0123 4XXX 78901";
      case 'email': return "yourname@mail.com";
      case 'address': return "Your Street Address\nTown/City, zip code";
      default: return "Новий контакт";
    }
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
          const contactType = getContactType(index);
          const icon = getIcon(contactType);
          const placeholder = getPlaceholder(contactType);
          
          return (
            <div key={index} className="flex items-center relative group item">
              <DelButton 
                onClick={() => handleRemoveItem(index)}
                className=""
              />
              
              <img src={icon} className="h-5 w-5 mr-3" alt={contactType} />
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