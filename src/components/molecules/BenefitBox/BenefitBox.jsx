import Image from "@atoms/Image";

export default function BenefitBox({ text, svgIcon }) {
  return (
    <div className="w-[190px] h-[100px] flex flex-col gap-2 px-2 items-center justify-center bg-white text-center rounded-lg shadow hover:opacity-80 hover:bg-gray-100 transition">
      <p className="text-normal text-black">{text}</p>
      <Image
        src={svgIcon}
        alt={text}
        className="w-[50px] h-[50px] object-contain"
      />
    </div>
  );
}
