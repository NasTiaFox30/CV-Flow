import { useRef, useEffect, useCallback } from 'react';

export default function EditableText({ tag: Tag, className, value, onUpdate }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && ref.current.innerText !== value) {
      ref.current.innerText = value;
    }
  }, [value]);

  const handleBlur = useCallback(() => {
    if (onUpdate && ref.current) {
      onUpdate(ref.current.innerText);
    }
  }, [onUpdate]);

  return (  
    <Tag
      ref={ref}
      className={className}
      contentEditable
      onBlur={handleBlur}
    />
  );
}