'use client'
import { useEffect, useState } from 'react'
import { fetchFeaturedProducts } from '../lib/api'
import ProductCard from './ProductCard'
import Loading from './Loading'


export default function ProductGrid() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  
  useEffect(() => {
    fetchFeaturedProducts().then(setProducts)
    setIsLoading(false)
  }, [])
  
  

  return (
    <>
      <div className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">สินค้าแนะนำ</h2>
        {isLoading && <Loading />}
        {!isLoading && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>}
      </div>
    </>
  )
}
