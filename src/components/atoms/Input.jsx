export default function Search({type, placeholder, className, required, value, onChange}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className}`}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
}
