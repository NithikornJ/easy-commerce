'use client'
import { useCartStore } from '@/store/cartStore'
import Link from 'next/link'

export default function CartPage() {
  const items = useCartStore((state) => state.items) || []
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">ตะกร้าสินค้า</h1>

      {items.length === 0 ? (
        <p>ตะกร้าว่างอยู่ 🛒</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="card bg-base-100 shadow p-4 flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-20 object-contain" />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>จำนวน: {item.quantity}</p>
                  <p>ราคารวม: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-error btn-sm"
                >
                  ลบ
                </button>
              </div>
            ))}
          </div>

          <div className="text-right font-bold text-lg mb-4">
            รวมทั้งหมด: ${total.toFixed(2)}
          </div>

          <Link href="/checkout">
            <button className="btn btn-primary w-full">ไปหน้าชำระเงิน</button>
          </Link>
        </>
      )}
    </div>
  )
}
