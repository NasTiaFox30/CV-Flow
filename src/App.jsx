import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CreateScreen from './components/CreateScreen';
import HeroScreen from './components/HeroScreen';
import Footer from './components/Footer';

const animations_variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -200 },
};

export default function App() {
  const [templateId, setTemplateId] = useState(null);

  const handleSelectedTemplate = (id) => {
    setTemplateId(id);
    console.log("template selected - " + id);
  };
  
  const handleGoBack = () => {
    setTemplateId(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {templateId === null ? (
          <motion.div
            key="heroScreen"
            variants={animations_variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}
          >
            <HeroScreen onSelectTemplate={handleSelectedTemplate} />
          </motion.div>
        ) : (
          <motion.div
            key="createScreen"
            variants={animations_variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}
          >
            <CreateScreen 
                selectedTemplateId={templateId} 
                onGoBack={handleGoBack}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer/>
    </div>
  );
}

