import { templateMap } from "./Templates/templatesStorage";
import BlocksToolbar from "./BlocksToolbar";
import restart_icon from "../assets/icons/restart-icon.svg"

export default function CreateScreen({ selectedTemplateId, onGoBack }) {
  const template = templateMap[selectedTemplateId];

  if (!template) {
    return (
      <p className="text-center text-lg mt-12">Ops! That template not found ;(</p>
    );
  }

  const TemplateComponent = template.component;

  return (
    <div className="flex flex-row h-screen">
      

      <div className="fixed">
        <button
          onClick={onGoBack}
          className="top-8 left-8 z-50 p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-200 transition-colors flex items-center space-x-2"
          aria-label="Повернутися до вибору шаблонів"
        >
          <img src={ restart_icon } alt="" className="w-7 h-7"/>
          <span>Select another template</span>
        </button>
        {/* <BlocksToolbar /> */}
      </div >
      
      {/* Main content */}
      <div className="flex-1 overflow-auto p-8">
        <TemplateComponent config={template.config} />
      </div>
    </div>
  );
} 