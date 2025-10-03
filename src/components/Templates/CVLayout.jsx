import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove, useSortable, } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { blocksMap } from "../Blocks/blocksMap";
import { blocksTextsData } from "../Blocks/blocksTextsData";

function SortableBlock({ id, section, onUpdate, onRemove }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const BlockComponent = blocksMap[id];
  if (!BlockComponent) return null;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="relative group"
    >
      {/* Drag handle */}
      <div
        className="absolute top-0 right-8 p-2 cursor-grab z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        {...listeners}
        title="Drag to move"
      > ≡
      </div>

      <BlockComponent section={section} onUpdate={onUpdate} />
      
      <button
        onClick={() => onRemove(id)}
        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-xs w-6 h-6 flex items-center justify-center z-10"
        title="Remove block"
      >
        ×
      </button>
    </div>
  );
}

export default function CVLayout({ areas, onBlockRemove }) {
  const [blocksTexts, setBlocksTexts] = useState(blocksTextsData);

  function handleUpdateBlock(id, newData) {
    setBlocksTexts((prev) => ({
      ...prev,
      [id]: newData,
    }));
  }

  function handleDragEnd(event) {
    const { over, active } = event;
    if (!over) return;

    const activeArea = areas.find((area) => area.blocks.includes(active.id));
    const overArea = areas.find((area) => area.blocks.includes(over.id));
    if (!overArea) return;

    const isNewBlock = !areas.some((area) => area.blocks.includes(active.id));
    if (isNewBlock) {
      const insertIndex = overArea.blocks.indexOf(over.id);
      const newBlocks = [...overArea.blocks];
      newBlocks.splice(insertIndex !== -1 ? insertIndex : newBlocks.length, 0, active.id);
      overArea.setBlocks(newBlocks);

      setBlocksTexts((prev) => {
        if (!prev[active.id] && blocksTextsData[active.id]) {
          return {
            ...prev,
            [active.id]: blocksTextsData[active.id],
          };
        }
        return prev;
      });

      return;
    }

    if (activeArea && activeArea.id === overArea.id) {
      const oldIndex = activeArea.blocks.indexOf(active.id);
      const newIndex = overArea.blocks.indexOf(over.id);
      if (activeArea.setBlocks && oldIndex !== newIndex) {
        const newBlocks = arrayMove(activeArea.blocks, oldIndex, newIndex);
        activeArea.setBlocks(newBlocks);
      }
    }
    else if (activeArea && overArea) {
      const overIndex = overArea.blocks.indexOf(over.id);
      const insertIndex = overIndex !== -1 ? overIndex : overArea.blocks.length;

      if (activeArea.setBlocks && overArea.setBlocks) {
        const newActiveBlocks = activeArea.blocks.filter(
          (block) => block !== active.id
        );
        activeArea.setBlocks(newActiveBlocks);

        const newOverBlocks = [...overArea.blocks];
        newOverBlocks.splice(insertIndex, 0, active.id);
        overArea.setBlocks(newOverBlocks);
      }
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      {areas.map((area) => (
        <div key={area.id} className={area.className}>
          <SortableContext items={area.blocks} strategy={verticalListSortingStrategy}>
            {area.blocks.map((blockId) => (
              <SortableBlock
                key={blockId}
                id={blockId}
                section={blocksTexts[blockId]}
                onUpdate={(newData) => handleUpdateBlock(blockId, newData)}
                onRemove={(id) => {
                  console.log("Remove button clicked:", id);
                  if (area.setBlocks) {
                    const newBlocks = area.blocks.filter((block) => block !== id);
                    area.setBlocks(newBlocks);
                  }
                  if (onBlockRemove) {
                    onBlockRemove(id, area.id);
                  }
                }}
              />
            ))}
          </SortableContext>
        </div>
      ))}
    </DndContext>
  );
}
