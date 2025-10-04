// PrintButton.jsx
export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="m-4 p-3 bg-stone-600 text-white cursor-pointer rounded-full shadow-lg hover:bg-stone-700 transition-colors flex items-center space-x-2 fixed bottom-4 left-4 print:hidden"
      title="Print Resume"
    >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9V2h12v7"/>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
        <rect x="6" y="14" width="12" height="8" rx="1"/>
        </svg>
      <span>Print My Resume</span>
    </button>
  );
}