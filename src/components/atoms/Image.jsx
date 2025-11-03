export default function Image({
  key,
  src,
  alt = "",
  className = ""
}) {
  return (
    <img key={key} src={src} alt={alt} className={`${className || "w-full h-40"}`} />
  );
}
