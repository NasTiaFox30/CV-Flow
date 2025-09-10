import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove, useSortable, } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { blocksMap } from "../Blocks/blocksMap";

function SortableBlock({ id }) {
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

    const lists = Object.fromEntries(
      areas.map((a) => [a.id, { blocks: a.blocks, setBlocks: a.setBlocks }])
    );
    
    // Moving
    if (active.data.current?.type !== "tool" && over.id !== "trash") {
      for (const { blocks, setBlocks } of areas) {
        if (blocks.includes(active.id) && blocks.includes(over.id)) {
          const oldIndex = blocks.indexOf(active.id);
          const newIndex = blocks.indexOf(over.id);
          setBlocks(arrayMove(blocks, oldIndex, newIndex));
        }
      }
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
