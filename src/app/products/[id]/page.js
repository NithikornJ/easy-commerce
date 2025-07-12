'use client'

import { fetchProductById } from "@/lib/api";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";



export default  function ProductDetailPage() {
  const params = useParams()
  const id = params.id
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const  addToCart = useCartStore((state) => state.addToCart)

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await fetchProductById(id)
      setProduct(product)
      setIsLoading(false)
    }
    fetchProduct()
  }, [id])
  
  

  return (
    <>
      {isLoading && <div className="text-center p-10">Loading...</div>}
      { !isLoading && 
      <div  className="container mx-auto">
        <div className="btn btn-ghost text-2xl my-6">
          <Link href="/products">Back</Link>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
          <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-[300px] object-contain" 
          />
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{product.category}</p>
            <p className="text-lg font-semibold text-green-600 mb-4">${product.price}</p>
            <p className="mb-6">{product.description}</p>
            <button 
            className="btn btn-primary"
            onClick={() => addToCart(product)}
            >Add to Cart</button>
          </div>
        </div>
      </div>}
    </>
  )
}