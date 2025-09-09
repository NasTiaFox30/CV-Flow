import EditableText from "../EditableField";

export default function Hobbies() {
  const hobbiesData = [ "Graphic Design", "Photography", "Videography"];

  return (
    <div className="mt-8 text-sm w-full">
      {/* <h2 className="text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 border-gray-200 pb-2">HOBBIES</h2> */}
      <EditableText
        tag="h2"
        className="text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 border-gray-200 pb-2"
        value="HOBBIES"
        onUpdate={(text) => onUpdate({ ...section, content: text })}
      />

      <div className="space-y-4 text-gray-200">
        {hobbiesData.map((hobby, index) => (
          <EditableText
            key={index}
            tag="li"
            className=""
            value={hobby}
            onUpdate={(text) => onUpdate({ ...section, content: text })}
          />
        ))}
      </div>
    </div>
  );
};
