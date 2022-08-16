import { createContext, ReactNode, useEffect, useState } from 'react'
import { CoffeesProps } from '../fakes/coffees'
import { produce } from 'immer'
import { toast } from 'react-toastify'
interface CartItem extends CoffeesProps {
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  cartTotal: number
  cartQuantity: number
  addToCart(product: CartItem): void
  removeFromCart(productId: number): void
  changeCartItemQuantity(productId: number, type: 'increase' | 'decrease'): void
}

export const CartContext = createContext({} as CartContextType)

interface CartProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProps) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storage = localStorage.getItem('cartKey')
    if (storage) {
      return JSON.parse(storage)
    }
    return []
  })
  const cartTotal = cart.reduce((total, cart) => {
    return total + cart.price * cart.quantity
  }, 0)

  const cartQuantity = cart.length

  function addToCart(product: CartItem) {
    const coffeeExistsInCart = cart.findIndex((cart) => cart.id === product.id)
    if (coffeeExistsInCart >= 0) {
      changeCartItemQuantity(product.id, 'increase')
    } else {
      setCart((state) => {
        localStorage.setItem('cartKey', JSON.stringify([...state, product]))
        return [...state, product]
      })
    }
    toast('Produto adicionado com sucesso!')
  }
  function removeFromCart(id: number) {
    const newCart = produce<CartItem[]>(cart, (coffee) => {
      const coffeeExistsInCart = cart.findIndex((cart) => cart.id === id)
      if (coffeeExistsInCart >= 0) {
        coffee.splice(coffeeExistsInCart, 1)
      }
    })
    setCart(newCart)
    toast('Produto removido com sucesso!')
  }
  function changeCartItemQuantity(id: number, type: 'increase' | 'decrease') {
    const updatedCart = produce<CartItem[]>(cart, (coffee) => {
      const coffeeExistsInCart = cart.findIndex((cart) => cart.id === id)
      if (coffeeExistsInCart >= 0) {
        const item = coffee[coffeeExistsInCart]
        coffee[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })
    // saveCart(updatedCart)
    setCart(updatedCart)
  }
  useEffect(() => {
    localStorage.setItem('cartKey', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        cartQuantity,
        addToCart,
        removeFromCart,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
