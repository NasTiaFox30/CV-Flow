import EditableText from "../EditableField";

export default function AboutMe({ section, onUpdate }) {
  return (
    <div className="mb-6">
      <EditableText
        tag="h2"
        className="text-xl font-bold uppercase border-b-2 pb-2 mb-4"
        value={section.title}
        onUpdate={(text) => onUpdate({ ...section, title: text })}
      />
      <EditableText
        tag="p"
        value={section.content}
        onUpdate={(text) => onUpdate({ ...section, content: text })}
      />
    </div>
  );
}
