import EditableText from "../EditableField"; 
  
export default function AboutMe() {
  return (
    <div className="mb-6">
      {/* <h2 className="text-xl font-bold uppercase border-b pb-2 mb-4">ABOUT ME</h2> */}
      <EditableText
        tag="h2"
        className="text-xl font-bold uppercase border-b pb-2 mb-4"
        value="ABOUT ME"
        onUpdate={(text) => onUpdate({ ...section, content: text })}
      /> 

      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
        euismod magna.
      </p> */}
      <EditableText
        tag="p"
        className=""
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
        euismod magna."
        onUpdate={(text) => onUpdate({ ...section, content: text })}
      /> 
    </div>
  );
};
