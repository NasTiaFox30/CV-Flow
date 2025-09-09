import CircularGallery from "./CircularGallery"

export default function HeroScreen() {
    return (
    <div>
        <div>Hero</div>

        <div style={{ height: '600px', position: 'relative' }}>
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