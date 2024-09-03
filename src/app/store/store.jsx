'use client'
import { create } from 'zustand'

const useCart = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const cartpersian = state.cart.find((item) => item?.id == product.id)
    if (cartpersian) {
        alert('این محصول قبلا به سبد خرید اضافه شده است.')
        return state
    }
    else {
        return { cart: [...state.cart, product] }
    }
}),

pluscart: (Productid) => set((state) => {
    const plusindex = state.cart.findIndex((item) => item.id == Productid)
    if (plusindex != -1) {
        state.cart[plusindex].count += 1
        return ({ cart: [...state.cart] })
    }
}),


minezcart: (Productid) => set((state) => {
    const minezindex = state.cart.findIndex((item) => item.id == Productid)
    if (state.cart[minezindex].count > 1) {
        state.cart[minezindex].count -= 1
        return ({ cart: [...state.cart] })
    }
    else {
        return ({ cart: state.cart.filter((item) => item.id != Productid) })
    }
}),


  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== productId)
  })),
}))

export default useCart