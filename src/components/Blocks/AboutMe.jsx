import EditableText from "../EditableField";
import { blockStyles } from "../Templates/blockStyles";

export default function AboutMe({ section, onUpdate, theme }) {
  const styles = blockStyles[theme]?.AboutMe || {};

  return (
    <div className="mt-8">
      <EditableText
        tag="h2"
        className={styles.title}
        value={section.title}
        onUpdate={(text) => onUpdate({ ...section, title: text })}
      />
      <EditableText
        tag="p"
        className={styles.content}
        value={section.content}
        onUpdate={(text) => onUpdate({ ...section, content: text })}
      />
    </div>
  );
}
