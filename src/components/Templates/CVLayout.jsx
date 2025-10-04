import { useDroppable } from "@dnd-kit/core";
import { useSortable, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { blocksMap } from "../Blocks/blocksMap";

function DroppableArea({ id, areaKey, children, className }) {
  const { setNodeRef, isOver } = useDroppable({
    id,
    data: { areaKey },
  });

  return (
    <div
      ref={setNodeRef}
      className={`${className} relative transition-all ${isOver ? "ring-2 ring-blue-400 bg-blue-50/30" : ""}`}
    >
      {children}
    </div>
  );
}

function SortableBlock({ id, instance, onUpdateInstance, onRemoveInstance, theme }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  if (!instance) return null;
  const BlockComponent = blocksMap[instance.type];
  if (!BlockComponent) return null;

  return (
    <div ref={setNodeRef} style={style} {...attributes} className="relative group">
      <div
        className="absolute top-0 right-8 p-2 cursor-grab z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        {...listeners}
        title="Drag to move"
      >
        ≡
      </div>

      <BlockComponent section={instance.section} onUpdate={(newSection) => onUpdateInstance(id, newSection)} theme={theme} />

      <button
        onClick={() => onRemoveInstance(id)}
        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-xs w-6 h-6 flex items-center justify-center z-10"
        title="Remove block"
      >
        ×
      </button>
    </div>
  );
}

export default function CVLayout({ areas, instances, onUpdateInstance, onRemoveInstance, theme }) {
  return (
    <>
      {areas.map((area) => (
        <DroppableArea key={area.id} id={area.id} areaKey={area.id} className={area.className}>
          <SortableContext items={area.blocks} strategy={verticalListSortingStrategy}>
            {area.blocks.map((instanceId) => (
              <SortableBlock
                key={instanceId}
                id={instanceId}
                instance={instances[instanceId]}
                onUpdateInstance={(id, newSection) => onUpdateInstance(id, newSection)}
                onRemoveInstance={(id) => onRemoveInstance(id, area.id)}
                theme={theme}
              />
            ))}
            {/* placeholder для порожньої області */}
            {(!area.blocks || area.blocks.length === 0) && (
              <div className="py-6 text-center text-gray-400 italic">Drop blocks here</div>
            )}
          </SortableContext>
        </DroppableArea>
      ))}
    </>
  );
}
  