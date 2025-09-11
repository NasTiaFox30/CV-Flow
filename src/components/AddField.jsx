export default function AddButton({ onClick, children = "+ Add", className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bottom-0 mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-stone-600 addbutton ${className}`}
    >
      {children}
    </button>
  );
}