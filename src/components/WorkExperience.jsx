import EditableText from "./EditableField";

export default function WorkExperience() {
  return (
    <div>
      {/* <h2 className="text-xl font-bold uppercase border-b pb-2 mb-4">WORK EXPERIENCE</h2> */}
      <EditableText
        tag="h2"
        className="text-xl font-bold uppercase border-b pb-2 mb-4"
        value="WORK EXPERIENCE"
        onUpdate={(text) => onUpdate({ ...section, content: text })}
      /> 
      
      <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              {/* <p className="font-semibold">Jan 2020 – Mar 2024</p> */}
              <EditableText
                tag="p"
                className="font-semibold"
                value="Jan 2020 – Mar 2024"
                onUpdate={(text) => onUpdate({ ...section, content: text })}
              />
              
              {/* <p className="text-gray-500">Job Position</p> */}
              <EditableText
                  tag="p"
                  className="text-gray-500"
                  value="Job Position"
                  onUpdate={(text) => onUpdate({ ...section, content: text })}
              />
            </div>

            <div>
              {/* <p className="font-bold">COMPANY OF LOREM IPSUM</p> */}
              <EditableText
                  tag="p"
                  className="font-bold"
                  value="COMPANY OF LOREM IPSUM"
                  onUpdate={(text) => onUpdate({ ...section, content: text })}
              />
            
              {/* <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p> */}
              <EditableText
                  tag="p"
                  className="text-gray-600 text-sm"
                  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                  onUpdate={(text) => onUpdate({ ...section, content: text })}
              />
            </div>
          </div>
      </div>
    </div>
  );
}
