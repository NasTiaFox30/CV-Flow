import { useState } from 'react';
import CreateScreen from './components/CreateScreen';
import HeroScreen from './components/HeroScreen';

export default function App() {
  const [templateId, setTemplateId] = useState(null);

  const handleSelectedTemplate = (id) => {
    setTemplateId(id);
    console.log("template selected - " + id);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <HeroScreen onSelectTemplate={handleSelectedTemplate} />
      <CreateScreen selectedTemplateId={templateId} />
    </div>
  );
}

