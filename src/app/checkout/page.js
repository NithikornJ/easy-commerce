'use client'
import { useCartStore } from '@/store/cartStore'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items) || []
  const clearCart = useCartStore((state) => state.clearCart)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !address) {
      alert('กรุณากรอกชื่อและที่อยู่')
      return
    }
    // จำลองการชำระเงิน
    clearCart()
    alert('สั่งซื้อสำเร็จ! ขอบคุณที่ใช้บริการ')
    router.push('/')
  }

 const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">ข้อมูลผู้ซื้อ</h2>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mx-auto">
          <label className="label">ชื่อ</label>
          <input 
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="label">ที่อยู่</label>
          <textarea
            className="textarea textarea-bordered w-full"
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>

          <button className="btn btn-neutral mt-4">ยืนยันการสั่งซื้อ</button>
        </fieldset>
      </form>

      <div>
        <h2 className="text-2xl font-bold mb-4">รายการสินค้า</h2>
        {items.length === 0 ? (
          <p>ไม่มีสินค้าในตะกร้า</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img src={item.image} className="w-16 h-16 object-contain" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>
                    {item.quantity} x ${item.price} = ${(
                      item.price * item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className="text-right font-bold mt-4">
              รวมทั้งหมด: ${total.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}