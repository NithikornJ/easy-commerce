'use client'
import { MdOutlineAccountCircle } from "react-icons/md";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
export default function Navbar() {
  const itemCount = useCartStore((state) => 
    state.items.reduce((total, item) => total + item.quantity, 0)
);
  return (
    <div className="bg-base-100 shadow-md sticky top-0 left-0 right-0 z-50">
      <div className="container mx-auto">
      <div className="navbar">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">EZ Shop</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                <span className="badge badge-sm indicator-item">{itemCount}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">{itemCount} Items</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                   <Link href="/cart">View cart</Link>  
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <MdOutlineAccountCircle size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link href="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
