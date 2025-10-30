import ProductCard from "@components/ProductCard/ProductCard";

export default function ProductSlide({ title, products }) {
  return (
    <section className="my-8 bg-white pb-3 rounded-b rounded-lg shadow">
      <h2 className="text-3xl p-2 text-white font-bold mb-2 bg-[#FCB147] rounded-t shadow">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
