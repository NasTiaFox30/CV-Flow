import { motion } from "framer-motion";

export default function AddButton({ onClick, children = "+ Add", className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      className={`bottom-0 mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-stone-600 addbutton ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}