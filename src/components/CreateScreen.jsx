import { useState } from "react";
import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { templateMap } from "./Templates/templatesStorage";
import BlocksToolbar from "./BlocksToolbar";
import restart_icon from "../assets/icons/restart-icon.svg";
import { blocksTextsData } from "./Blocks/blocksTextsData";
import PrintButton from "./PrintButton";

// unic instance id
const genInstanceId = (type) =>
  `${type}__${Date.now().toString(36)}__${Math.random().toString(36).slice(2, 6)}`;

const deepClone = (obj) => JSON.parse(JSON.stringify(obj || {}));

export default function CreateScreen({ selectedTemplateId, onGoBack }) {
  const [activeBlockType, setActiveBlockType] = useState(null);

  const template = templateMap[selectedTemplateId];
  if (!template)
    return <p className="text-center text-lg mt-12">Ops! That template not found ;(</p>;
  
  const TemplateComponent = template.component;

  // 1) перетворюємо початкову конфігурацію (масиви типів) → масиви instance-id + об'єкт instances
  const buildInitial = (tmplConfig) => {
    const instances = {};
    const areas = {};
    Object.entries(tmplConfig).forEach(([areaKey, typesArr]) => {
      areas[areaKey] = (typesArr || []).map((type) => {
        const id = genInstanceId(type);
        instances[id] = {
          type,
          section: deepClone(blocksTextsData[type] || { title: type, content: "" }),
        };
        return id;
      });
    });
    return { areas, instances };
  };

  const initial = buildInitial(template.config);

  const [areasConfig, setAreasConfig] = useState(initial.areas);
  const [instances, setInstances] = useState(initial.instances);

  const updateInstanceSection = (instanceId, newSection) =>
    setInstances((prev) => ({ ...prev, [instanceId]: { ...prev[instanceId], section: newSection } }));

  const removeInstance = (instanceId, areaKey) => {
    setAreasConfig((prev) => ({ ...prev, [areaKey]: prev[areaKey].filter((b) => b !== instanceId) }));
    setInstances((prev) => {
      const copy = { ...prev };
      delete copy[instanceId];
      return copy;
    });
  };


  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeData = active.data?.current || {};
    const overData = over.data?.current || {};

    // Drag from TollBar -> new instance
    if (activeData.fromToolbar) {
      const type = activeData.type;
      const newId = genInstanceId(type);

      // instance (default data)
      setInstances((prev) => ({
        ...prev,
        [newId]: { type, section: deepClone(blocksTextsData[type] || { title: type, content: "" }) },
      }));

      // check areaKey - droppable area (over.data.areaKey) OR instance
      let areaKey = overData.areaKey;
      if (!areaKey) {
        areaKey = Object.keys(areasConfig).find((k) => areasConfig[k].includes(over.id));
      }
      if (!areaKey) return;

      setAreasConfig((prev) => {
        const current = [...(prev[areaKey] || [])];
        const idx = current.indexOf(over.id);
        if (idx === -1) current.push(newId);
        else current.splice(idx, 0, newId);
        return { ...prev, [areaKey]: current };
      });

      return;
    }

    // 2) move present instance (reorder / move between areas)
    const activeId = active.id;
    const overId = over.id;

    const sourceAreaKey = Object.keys(areasConfig).find((k) => areasConfig[k].includes(activeId));
    const destAreaKey = overData.areaKey || Object.keys(areasConfig).find((k) => areasConfig[k].includes(overId));
    if (!sourceAreaKey || !destAreaKey) return;

    if (sourceAreaKey === destAreaKey) {
      // reorder
      setAreasConfig((prev) => {
        const arr = [...prev[sourceAreaKey]];
        const oldIndex = arr.indexOf(activeId);
        const newIndex = arr.indexOf(overId);
        if (oldIndex === -1 || newIndex === -1 || oldIndex === newIndex) return prev;
        arr.splice(oldIndex, 1);
        arr.splice(newIndex, 0, activeId);
        return { ...prev, [sourceAreaKey]: arr };
      });
    } else {
      // move between areas
      setAreasConfig((prev) => {
        const src = prev[sourceAreaKey].filter((i) => i !== activeId);
        const dst = [...prev[destAreaKey]];
        const insertIdx = dst.indexOf(overId) !== -1 ? dst.indexOf(overId) : dst.length;
        dst.splice(insertIdx, 0, activeId);
        return { ...prev, [sourceAreaKey]: src, [destAreaKey]: dst };
      });
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={(event) => {
        const activeData = event.active.data?.current;
        if (activeData?.fromToolbar) setActiveBlockType(activeData.type);
      }}
      onDragEnd={(event) => {
        handleDragEnd(event);
        setActiveBlockType(null);
      }}
    >
      <div className="flex flex-row">
        <div className="fixed left-0 top-0 h-full">
          <button
            onClick={onGoBack}
            className="m-4 p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-200 transition-colors flex items-center space-x-2"
          >
            <img src={restart_icon} alt="" className="w-6 h-6" />
            <span>Select another template</span>
          </button>

          <BlocksToolbar />
          <PrintButton/>
        </div>

        <div className="flex-1 overflow-auto p-8 ml-64 print:p-0 print:ml-0">
          <TemplateComponent
            config={areasConfig}
            instances={instances}
            onUpdateInstance={updateInstanceSection}
            onRemoveInstance={removeInstance}
          />
        </div>
      </div>

      <DragOverlay>
        {activeBlockType ? (
          <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-sm font-medium text-gray-700">
            {activeBlockType}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
} 