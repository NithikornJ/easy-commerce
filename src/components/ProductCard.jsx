import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow hover:scale-[1.02] transition">
      <figure className="p-4">
        <img src={product.image} alt={product.title} className="h-40 object-contain" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm">{product.title}</h2>
        <p className="text-green-600 font-semibold">${product.price}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/${product.id}`} className="btn btn-sm btn-outline">
            ดูสินค้า
          </Link>
        </div>
      </div>
    </div>
  )
}
