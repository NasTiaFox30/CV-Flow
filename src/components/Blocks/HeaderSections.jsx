import EditableText from "../EditableField";
import { blockStyles } from "../Templates/blockStyles";

export default function HeaderSections({ section, onUpdate, theme }) {
  const styles = blockStyles[theme]?.HeaderSections || {};

  return (
    <div className={styles.container}>
      <EditableText
        tag="h1"
        className={styles.name}
        value={section.name}
        onUpdate={(text) => onUpdate({ ...section, name: text })}
      />

      <EditableText
        tag="p"
        className={styles.title}
        value={section.title}
        onUpdate={(text) => onUpdate({ ...section, title: text })}
      />
    </div>
  );
}