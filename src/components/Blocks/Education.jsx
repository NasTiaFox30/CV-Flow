import EditableText from "../EditableField";

export default function Education() {
  const educationData = [
    {
      period: "Jan 2017 – Mar 2020",
      university: "UNIVERSITY OF LOREM IPSUM",
      degree: "Your Degree Name Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
  ];

  return (
    <div className="mb-6">
      {/* <h2 className="text-xl font-bold uppercase border-b pb-2 mb-4">EDUCATION</h2> */}
      <EditableText
        tag="h2"
        className="text-xl font-bold uppercase border-b pb-2 mb-4"
        value="EDUCATION"
        onUpdate={(text) => onUpdate({ ...section, content: text })}
      /> 

      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <div>
              {/* <p className="font-semibold">{edu.period}</p> */}
              <EditableText
                tag="p"
                className="font-semibold"
                value={edu.period}
                onUpdate={(text) => onUpdate({ ...section, content: text })}
              /> 
              {/* <p className="text-gray-500">{edu.degree}</p> */}
              <EditableText
                tag="p"
                className="text-gray-500"
                value={edu.degree}
                onUpdate={(text) => onUpdate({ ...section, content: text })}
              /> 
            </div>

            <div>
              {/* <p className="font-bold">{edu.university}</p> */}
              <EditableText
                tag="p"
                className="font-bold"
                value={edu.university}
                onUpdate={(text) => onUpdate({ ...section, content: text })}
              /> 
              {/* <p className="text-gray-600 text-sm">{edu.description}</p> */}
              <EditableText
                tag="p"
                className="text-gray-600 text-sm"
                value={edu.description}
                onUpdate={(text) => onUpdate({ ...section, content: text })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
