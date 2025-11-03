export default function Image({
  key,
  src,
  alt,
  className
}) {
  return (
    <img
      key={key}
      src={src}
      alt={alt}
      className={`w-full h-40 ${className}`}
    />
  );
}
