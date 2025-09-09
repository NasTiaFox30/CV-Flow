import CVTemplate_1 from './templates/CVTemplate_1';

const templates = {
  template1: { name: 'Classic', component: CVTemplate_1 },
};

export default function CreateScreen({ selectedTemplateId }) {
    const TemplateComponent = templates[selectedTemplateId-1]?.component;

    return (
        <div className="flex flex-col h-screen bg-gray-200">
            <div className="flex-1 overflow-y-auto p-8">
                {TemplateComponent ? <TemplateComponent /> : <p className="text-center text-lg mt-12">Ops! That template not found ;(</p>}
            </div>
        </div>
    );
}