import { templateMap } from "./Templates/templatesStorage";

export default function CreateScreen({ selectedTemplateId }) {
  const TemplateComponent = templateMap[selectedTemplateId];

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto p-8">
        {TemplateComponent ? (
          <TemplateComponent />
        ) : (
          <p className="text-center text-lg mt-12"> Ops! That template not found ;(</p>
        )}
      </div>
    </div>
  );
}