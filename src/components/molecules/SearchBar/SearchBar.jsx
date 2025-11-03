import Input from "@atoms/Input.jsx";

export default function SearchBar() {
  return (
    <Input type="text" placeholder="Tìm đồ chơi" className="focus:opacity-[0.9] focus:border-none focus:outline-none placeholder:text-black pl-4 text-gray-800 bg-[#FFF] max-w-[500px] w-full rounded-[20px] h-[35px]" />
  );
}
