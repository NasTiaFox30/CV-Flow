import { useRef, useCallback } from 'react';

export default function EditableText({ tag: Tag, className, value, onUpdate }) {
  const ref = useRef(null);

  const handleInput = useCallback(() => {
    if (onUpdate) {
      onUpdate(ref.current.innerText);
    }
  }, [onUpdate]);

  return (  
    <Tag
      ref={ref}
      className={className}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleInput}
      onInput={handleInput}
    >
      {value}
    </Tag>
  );
}