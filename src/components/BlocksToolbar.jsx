import { useRef } from "react";
import { useDraggable } from "@dnd-kit/core";
import { blocksMap } from "./Blocks/blocksMap";

function DraggableTool({ id: type }) {
  // унікальний id для draggable елемента в тулбарі (щоб ніколи не колайдив з instance-id у шаблоні)
  const toolDragId = useRef(`tool-${type}-${Math.random().toString(36).slice(2, 8)}`);

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: toolDragId.current,
    data: { fromToolbar: true, type }, // передаємо type, щоб на drop створити instance потрібного типу
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  const blockNames = {
    AvatarFrame: "Avatar",
    ContactInfo: "Contact Info",
    Skills: "Skills",
    Hobbies: "Hobbies",
    HeaderSections: "Header",
    AboutMe: "About Me",
    Education: "Education",
    WorkExperience: "Work Experience",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`p-3 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md cursor-grab ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-gray-500">≡</span>
        <span className="font-medium text-sm">{blockNames[type] || type}</span>
      </div>
    </div>
  );
}

export default function BlocksToolbar() {
  const availableBlocks = Object.keys(blocksMap);
  return (
    <div className="mt-5 w-56 p-4 bg-gray-50 border-r border-gray-200 h-full overflow-y-auto text-gray-800 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4 text-gray-800">Blocks Toolbox</h3>
      <p className="text-sm text-gray-600 mb-4">Drag blocks to add them to your CV</p>
      <div className="space-y-2">
        {availableBlocks.map((blockId) => (
          <DraggableTool key={blockId} id={blockId} />
        ))}
      </div>
    </div>
  );
}
