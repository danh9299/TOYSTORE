import { useState } from "react";
import Input from "@atoms/Input";
import Button from "@atoms/Button";

export default function MailForm() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    if (!email.trim()) {
      alert("Vui lòng nhập địa chỉ email!");
      return;
    }
    alert(`Đã lưu địa chỉ email: ${email}`);
    setEmail("");
    e.preventDefault();
  };
  return (
    <div className="w-1/2 p-4 bg-white rounded-md shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Để lại địa chỉ Mail
      </h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          required={true}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập địa chỉ mail của bạn..."
          className="block mt-4 w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
        />
        <Button
          type="submit"
          className="block mt-4 px-8 cursor-pointer py-2 bg-gray-600 text-white font-medium hover:bg-[#E0E0E0] rounded active:scale-95 transition-all"
        >
          Gửi
        </Button>
      </form>
    </div>
  );
}
