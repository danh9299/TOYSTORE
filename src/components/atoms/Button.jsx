export default function Button({ type, className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`cursor-pointer  ${className}`}
    >
      {children}
    </button>
  );
}
