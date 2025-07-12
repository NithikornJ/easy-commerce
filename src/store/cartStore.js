// src/store/cartStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        const items = get().items
        const exist = items.find((item) => item.id === product.id)

        if (exist) {
          set({
            items: items.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          })
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] })
        }
      },

      removeFromCart: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) })
      },

      clearCart: () => {
        set({ items: [] })
      },
    }),
    {
      name: 'cart-storage', 
    }
  )
)
