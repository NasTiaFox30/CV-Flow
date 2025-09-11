export default function DelButton({ onClick, children = "🗑️", className = "", title = "Remove field" }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`absolute -right-2 delbutton ${className}`}
    >
      {children}
    </button>
  );
}