import { useParams } from "react-router-dom";
import products from "@data/products.json";
import Button from "@atoms/Button";
import Image from "@atoms/Image";
import Contact from "@organisms/Contact/Contact";
import MailForm from "@organisms/MailForm/MailForm";
import List from "@molecules/List/List";

export default function ProductDetail() {
  const { id } = useParams();
  const productId = Number(id);

  const allProducts = [...products.boys, ...products.girls];
  const product = allProducts.find((item) => item.id === productId);

  if (!product) {
    return (
      <p className="text-center text-gray-500 mt-10">Không tìm thấy sản phẩm</p>
    );
  }

  return (
    <div className="max-w-[1024px] mx-auto p-6">
      <div className="flex gap-8 mb-5">
        <div className="shrink-0">
          <Image
            src={`/img/${product.image}`}
            alt={product.name}
            className="w-[450px] h-auto rounded-lg shadow cursor-pointer hover:opacity-[0.9]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <h3 className="text-3xl text-[#FCB147] font-semibold">
            Giá bán: {product.price}
          </h3>
          <h3 className="text-gray-700 leading-relaxed">{product.desc}</h3>
          <h3 className="text-xl text-gray-700 font-semibold">
            Phụ kiện đi kèm bao gồm:
          </h3>
          <List items={product.feature} className="list-disc pl-5" />

          <Button className="bg-[#f9a432] hover:bg-[#FCB147] text-white mt-4 w-fit p-4">
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <Contact />
        <MailForm />
      </div>
    </div>
  );
}
