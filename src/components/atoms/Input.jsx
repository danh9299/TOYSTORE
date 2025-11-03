export default function Search({
  type = "text",
  placeholder = "Nhập giá trị vào đây..",
  className = "",
  required = false,
  value = "",
  onChange = () => {},
}) {
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
