import EditableText from "./EditableField";

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
      <h2 className="text-xl font-bold uppercase border-b pb-2 mb-4">EDUCATION</h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">{edu.period}</p>
              <p className="text-gray-500">{edu.degree}</p>
            </div>

            <div>
              <p className="font-bold">{edu.university}</p>
              <p className="text-gray-600 text-sm">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
