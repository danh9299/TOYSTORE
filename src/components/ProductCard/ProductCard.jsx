import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="w-[200px] h-[240px] bg-[#FAFAFA] shadow rounded-lg p-3 mb-3 hover:shadow-lg transition border-[#e0e0e0] border">
        <img
          src={`/img/${product.image}`}
          alt={product.name}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="font-semibold mt-3 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.price}</p>
      </div>
    </Link>
  );
}
