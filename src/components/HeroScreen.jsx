import SplitText from "./SplitText";
import CircularGallery from "./CircularGallery";
import { templates } from "./Templates/templatesStorage";

export default function HeroScreen({ onSelectTemplate }) {
  const handleSelect = (id) => {
    onSelectTemplate(id);
  };

  return (
    <div className="flex flex-col items-center justify-center max-h-screen p-4">
      {/* Hero title */}
      <div className="text-center mb-6">
        <SplitText
          text="CV Flow"
          className="text-6xl md:text-7xl font-extrabold text-black mb-4"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <p className="mt-4 text-xl md:text-2xl text-center text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Stwórz profesjonalne CV bez wysiłku. <br />
          Skorzystaj z gotowych szablonów i dostosuj je do swoich potrzeb.
        </p>
      </div>

      {/* Gallery */}
      <div className="w-full max-w-6xl mx-auto mb-5" style={{ height: "500px", position: "relative" }}>
        <CircularGallery
          items={templates}
          textColor="#000000"
          borderRadius={0.02}
          font="bold 32px Arial"
          scrollSpeed={2}
          scrollEase={0.03}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
}