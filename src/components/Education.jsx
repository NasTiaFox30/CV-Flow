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
      <h2 className="text-xl font-bold border-b border-b pb-2 mb-4">EDUCATION</h2>
      <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Jan 2017 – Mar 2020</p>
              <p className="text-gray-500">Your Degree Name Here</p>
            </div>

            <div>
              <p className="font-bold">UNIVERSITY OF LOREM IPSUM</p>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>
      </div>
    </div>
  );
}
