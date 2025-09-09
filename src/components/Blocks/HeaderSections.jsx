import EditableText from "../EditableField"

export default function HeaderSections() {
    return (
    <div className="mb-6">
        {/* <h1 className="text-5xl font-bold mb-1 font-extrabold tracking-wide">Name Surename</h1> */ }
        <EditableText
            tag="h1"
            className="text-5xl font-bold mb-1 font-extrabold tracking-wide"
            value="Name Surename"
            onUpdate={(text) => onUpdate({ ...section, content: text })}
        />

        {/* <p className="text-gray-500 mb-6 text-lg">Graphic Designer</p> */}
        <EditableText
            tag="p"
            className="text-gray-500 mb-6 text-lg"
            value="COMPANY OF LOREM IPSUM"
            onUpdate={(text) => onUpdate({ ...section, content: text })}
        />
    </div>
    )
}


        