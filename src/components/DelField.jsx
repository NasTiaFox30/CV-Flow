export default function DelButton({ onClick, children = "🗑️", className = "", title = "Remove field" }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`absolute inset-y-0 -right-5 delbutton ${className}`}
    >
      {children}
    </button>
  );
}