import SearchBar from "@molecules/SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#FCB147] text-white shadow">
      <div className="max-w-[1024px] mx-auto py-2 flex items-center justify-between">
        <Link to="/" className="hover:opacity-[0.8]">
          <div className="text-xl font-bold">ToyStore 🧸</div>
        </Link>
        <SearchBar />
        <div className="space-x-4">
          <Link to="/login" className="hover:underline">
            Đăng nhập
          </Link>
          <Link to="/register" className="hover:underline">
            Đăng ký
          </Link>
        </div>
      </div>
    </header>
  );
}
