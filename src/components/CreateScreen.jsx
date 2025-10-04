import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { templateMap } from "./Templates/templatesStorage";
import BlocksToolbar from "./BlocksToolbar";
import restart_icon from "../assets/icons/restart-icon.svg";
import CVTemplate_1 from "./Templates/CVTemplate_1";
import CVTemplate_2 from "./Templates/CVTemplate_2";
import { blocksTextsData } from "./Blocks/blocksTextsData";

// unic instance id
const genInstanceId = (type) =>
  `${type}__${Date.now().toString(36)}__${Math.random().toString(36).slice(2, 6)}`;

const deepClone = (obj) => JSON.parse(JSON.stringify(obj || {}));

export default function CreateScreen({ selectedTemplateId, onGoBack }) {
  const template = templateMap[selectedTemplateId];
  if (!template)
    return <p className="text-center text-lg mt-12">Ops! That template not found ;(</p>;

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

  const updateAreaBlocks = (areaKey, newBlocks) =>
    setAreasConfig((prev) => ({ ...prev, [areaKey]: newBlocks }));

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

  // головна логіка dragEnd
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeData = active.data?.current || {};
    const overData = over.data?.current || {};

    // 1) Перетягування з тулбара -> створюємо новий instance
    if (activeData.fromToolbar) {
      const type = activeData.type;
      const newId = genInstanceId(type);

      // створюємо instance з дефолтними даними
      setInstances((prev) => ({
        ...prev,
        [newId]: { type, section: deepClone(blocksTextsData[type] || { title: type, content: "" }) },
      }));

      // визначаємо areaKey: або по droppable area (over.data.areaKey), або по тому, на який instance кинули
      let areaKey = overData.areaKey;
      if (!areaKey) {
        areaKey = Object.keys(areasConfig).find((k) => areasConfig[k].includes(over.id));
      }
      if (!areaKey) return;

      setAreasConfig((prev) => {
        const current = [...(prev[areaKey] || [])];
        // якщо кинули на існуючий instance -> вставляємо перед ним, інакше в кінець
        const idx = current.indexOf(over.id);
        if (idx === -1) current.push(newId);
        else current.splice(idx, 0, newId);
        return { ...prev, [areaKey]: current };
      });

      return;
    }

    // 2) Переміщення існуючого instance (reorder / move between areas)
    const activeId = active.id;
    const overId = over.id;

    const sourceAreaKey = Object.keys(areasConfig).find((k) => areasConfig[k].includes(activeId));
    const destAreaKey = overData.areaKey || Object.keys(areasConfig).find((k) => areasConfig[k].includes(overId));
    if (!sourceAreaKey || !destAreaKey) return;

    if (sourceAreaKey === destAreaKey) {
      // reorder всередині однієї зони
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
      // move між зонами
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
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex flex-row h-screen">
        <div className="fixed left-0 top-0 h-full">
          <button
            onClick={onGoBack}
            className="m-4 p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-200 transition-colors flex items-center space-x-2"
          >
            <img src={restart_icon} alt="" className="w-6 h-6" />
            <span>Select another template</span>
          </button>

          <BlocksToolbar />
        </div>

        <div className="flex-1 overflow-auto p-8 ml-64">
          {selectedTemplateId === 1 && (
            <CVTemplate_1
              config={areasConfig}
              instances={instances}
              onUpdateArea={updateAreaBlocks}
              onUpdateInstance={updateInstanceSection}
              onRemoveInstance={removeInstance}
            />
          )}
          {selectedTemplateId === 2 && (
            <CVTemplate_2
              config={areasConfig}
              instances={instances}
              onUpdateArea={updateAreaBlocks}
              onUpdateInstance={updateInstanceSection}
              onRemoveInstance={removeInstance}
            />
          )}
        </div>
      </div>
    </DndContext>
  );
} 