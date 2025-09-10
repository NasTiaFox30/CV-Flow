import { templateMap } from "./Templates/templatesStorage";

export default function CreateScreen({ selectedTemplateId }) {
  const template = templateMap[selectedTemplateId];

  if (!template) {
    return (
      <p className="text-center text-lg mt-12">Ops! That template not found ;(</p>
    );
  }

  const TemplateComponent = template.component;

  return (
    <div className="flex flex-row gap-6 p-8">

      {/* Selected template */}
      <div className="flex-1 overflow-y-auto">
        <TemplateComponent config={template.config} />
      </div>
    </div>
  );
}