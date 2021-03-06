export default function Button({ children, className, onClick }) {
  return (
    <button
      className={`bg-gray-900 text-gray-100 px-6 py-3 rounded-sm font-semibold uppercase text-xs tracking-wider ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
