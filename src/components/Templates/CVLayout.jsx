import { useState, useRef } from "react";
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
      {...listeners}
      className="cursor-grab"
    >
      <BlockComponent />
    </div>
  );
}

/**
 * CVLayout — drag&drop logic".
 * @param {object} props
 * @param {{
 *   id: string,
 *   blocks: string[],
 *   setBlocks: (fn) => void,
 *   className: string
 * }[]} props.areas
 * @param {string} [props.containerClass]
 */
export default function CVLayout({ areas }) {
  function handleDragEnd(event) {
    const { over, active } = event;
    if (!over) return;

    // DELETE
    if (over.id === "trash") {
      const areaWithBlock = areas.find(area => area.blocks.includes(active.id));
      if (areaWithBlock) {
        areaWithBlock.setBlocks(areaWithBlock.blocks.filter(blockId => blockId !== active.id));
      }
      return;
    }

    // ADD
    if (active.data.current?.type === "tool") {
      const targetArea = areas.find(area => area.id === over.id || area.blocks.includes(over.id));
      if (targetArea) {
        const newBlockId = active.id;
        const newBlocks = [...targetArea.blocks];
        
        // New index of place 
        const overIndex = targetArea.blocks.indexOf(over.id);
        const insertIndex = overIndex !== -1 ? overIndex : newBlocks.length;
        
        newBlocks.splice(insertIndex, 0, newBlockId);
        targetArea.setBlocks(newBlocks);
      }
      return;
    }

    // MOVE
    const activeArea = areas.find(area => area.blocks.includes(active.id));
    const overArea = areas.find(area => area.blocks.includes(over.id));

    if (!activeArea || !overArea) return;

    if (activeArea.id === overArea.id) {
      // In one area
      const oldIndex = activeArea.blocks.indexOf(active.id);
      const newIndex = overArea.blocks.indexOf(over.id);
      activeArea.setBlocks(arrayMove(activeArea.blocks, oldIndex, newIndex));
    } else {
      // Beetween areas
      const newActiveBlocks = activeArea.blocks.filter(block => block !== active.id);
      const newOverBlocks = [...overArea.blocks];

      const overIndex = overArea.blocks.indexOf(over.id);
      const insertIndex = overIndex !== -1 ? overIndex : newOverBlocks.length;
      newOverBlocks.splice(insertIndex, 0, active.id);

      activeArea.setBlocks(newActiveBlocks);
      overArea.setBlocks(newOverBlocks);
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      {areas.map((area) => (
        <div key={area.id} className={area.className}>
          <SortableContext items={area.blocks} strategy={verticalListSortingStrategy}>
            {area.blocks.map((block) => (
              <SortableBlock key={block} id={block} />
            ))}
          </SortableContext>
        </div>
      ))}
    </DndContext>
  );
}
