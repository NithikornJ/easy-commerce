import { fetchProduct } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import Loading from "@/components/Loading";
import { Suspense } from "react";




export default async function ProductsPage() {

  const products = await fetchProduct();
  if (!products) {
    return <div>ไม่พบสินค้า</div>;
  }

  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">สินค้าทั้งหมด</h1>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Suspense>
    </div>
    </>
  )
}