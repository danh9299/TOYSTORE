import { useState, useEffect } from "react";
import Image from "@atoms/Image";
import Button from "@atoms/Button";

export default function Banner({ images = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative max-w-[1024px] h-[300px] overflow-hidden rounded-xl shadow-lg">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`banner-${index}`}
          className={`absolute w-full h-auto object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <Button
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-700 rounded-full p-2"
      >
        ‹
      </Button>
      <Button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-700 rounded-full p-2"
      >
        ›
      </Button>

      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
