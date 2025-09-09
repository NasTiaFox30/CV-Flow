import { useState } from 'react';
import EditableText from '../EditableField';

export default function SkillBar({ name, level }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(level);

    const handleBarClick = () => {
        setIsEditing(true);
    };
    const handleInput = (event) => {
        if (event.type === 'change') {
            let newValue = Math.min(100, Math.max(0, event.target.value));
            setCurrentLevel(newValue);
        } else if (event.type === 'blur') {
            setIsEditing(false);
        }
    };

  return (
    isEditing ? (
      <div className="flex items-center justify-between py-1 relative text-gray-200">
        <div className="relative flex-shrink-0 flex items-center w-full">
          <div className="flex-grow bg-gray h-2 rounded-full border-2 border-double border-gray-300 mr-2">
            <div
              className="bg-gray-200 h-full rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${currentLevel}%` }}
            ></div>
          </div>
          <input
            type="number"
            value={currentLevel}
            onChange={handleInput}
            onBlur={handleInput}
            autoFocus
            className="w-16 text-center border rounded mr-2"
          />
        </div>
      </div>
    ) : (
      <div className="flex items-center justify-between py-1 relative text-gray-200">
        {/* <p className="flex-grow">{name}</p> */}
        <EditableText
            tag="p"
            className="flex-grow"
            value={ name }
            onUpdate={(text) => onUpdate({ ...section, content: text })}
        />      
                  
        <div
          className="flex-grow cursor-pointer"
          onClick={handleBarClick}
        >
          <div className="flex items-center w-full">
            <div className="flex-grow bg-gray h-2 rounded-full border-2 border-double border-gray-300 mr-2">
              <div
                className="bg-gray-200 h-full rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${currentLevel}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}