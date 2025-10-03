import { useState } from 'react';
import EditableText from '../EditableField';

export default function SkillBar({ name, level, onNameChange, onLevelChange, variant}) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(level || 0);

  const handleBarClick = () => setIsEditing(true);
  const handleBlur = () => setIsEditing(false);

  // - Progress Bar
  const renderBar = () => (
    <div className="flex-grow cursor-pointer" onClick={handleBarClick}>
      <div className="flex items-center w-full">
        <div className="flex-grow h-2 rounded-full border-2 border-double mr-2">
          <div
            className="bg-gray-400 h-full rounded-full transition-all duration-300"
            style={{ width: `${currentLevel}%` }}
          />
        </div>
      </div>
    </div>
  );

  // - Dots (5 lvls)
  const renderDots = () => {
    const maxDots = 5;
    const activeDots = Math.round((currentLevel / 100) * maxDots);

    return (
      <div className="flex gap-2 cursor-pointer" onClick={handleBarClick}>
        {Array.from({ length: maxDots }, (_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full ${i < activeDots ? "bg-stone-700" : "bg-stone-300"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center py-1 relative">
      <EditableText
        tag="p"
        className="flex-grow"
        value={name}
        onUpdate={onNameChange}
      />

      {variant === "dots" ? renderDots() : renderBar()}

      {isEditing && (
        <input
          type="number"
          value={currentLevel}
          min={0}
          max={100}
          onChange={(e) => {
            const newVal = Math.min(100, Math.max(0, Number(e.target.value)));
            setCurrentLevel(newVal);
            onLevelChange(newVal);
          }}
          onBlur={handleBlur}
          autoFocus
          className="w-16 text-center border rounded ml-2"
        />
      )}
    </div>
  );
}