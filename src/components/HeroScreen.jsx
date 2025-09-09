import SplitText from "./SplitText";
import CircularGallery from "./CircularGallery"

export default function HeroScreen() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">

            <div className="text-center">
                <SplitText
                text="CV Flow"
                className="text-5xl font-extrabold text-black"
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
            </div>
            
            <p className="mt-4 text-xl text-center text-gray-700">
                Stwórz profesjonalne CV bez wysiłku. <br /> Skorzystaj z gotowych szablonów i dostosuj je do swoich potrzeb.
            </p>

            <div style={{ height: '600px', width: '90%', position: 'relative' }}>
                <CircularGallery 
                    items={[
                        { image: `https://picsum.photos/seed/1/800/1000?grayscale`, text: 'Classic CV' },
                        { image: `https://picsum.photos/seed/1/800/1000?grayscale`, text: 'Modern CV' },
                        { image: `https://picsum.photos/seed/2/800/1000?grayscale`, text: 'Professional CV' },
                        { image: `https://picsum.photos/seed/3/800/1000?grayscale`, text: 'Creative CV' },
                        { image: `https://picsum.photos/seed/4/800/1000?grayscale`, text: 'Minimalist CV' },
                        { image: `https://picsum.photos/seed/16/800/1000?grayscale`, text: 'Academic CV' }
                    ]}
                    textColor="#000000"
                    borderRadius={0.02}
                    font="bold 32px Arial"
                    scrollSpeed={2}
                    scrollEase={0.03}
                />
            </div>
        </div> 
    );
}