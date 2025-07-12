export default function Hero() {
  return (
    <div className="hero min-h-[60vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to EZ Shop</h1>
          <p className="py-6">
            ช้อปง่าย สินค้าคุณภาพ ราคาดี ส่งเร็วทั่วไทย!
          </p>
          <a href="/products" className="btn btn-primary">
            เริ่มช้อปเลย
          </a>
        </div>
      </div>
    </div>
  )
}
