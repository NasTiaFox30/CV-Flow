import { useCallback } from 'react';
import { blocksTextsData } from '../Blocks/blocksTextsData';

export const useBlockActions = (section, onUpdate) => {
    const addItem = useCallback((itemType) => {
      
        const defaultItem = blocksTextsData[itemType]?.defaultItem;
        
        const newItem = defaultItem || { 
        title: "NEW BLOCK",
        content: "Decription .."
        };
        
        onUpdate({ ...section, items: [...section.items, newItem] });
    }, [section, onUpdate]);

    const updateItem = useCallback((index, field, value) => {
        const updatedItems = [...section.items];
        updatedItems[index] = { ...updatedItems[index], [field]: value };
        onUpdate({ ...section, items: updatedItems });
    }, [section, onUpdate]);

    const removeItem = useCallback((index) => {
        const updatedItems = section.items.filter((_, i) => i !== index);
        onUpdate({ ...section, items: updatedItems });
    }, [section, onUpdate]);

    return { addItem, updateItem, removeItem };
};