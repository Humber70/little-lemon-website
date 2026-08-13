import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])


  const addProductCart = product => {
    const isProductInCart = cart.find(item => item.id === product.id);

    if(isProductInCart) {
      setCart(
        cart.map(item => item.id === product.id ? {...item, quanty: item.quanty + 1} : item  )
      )
    }
    else {
      setCart(prevData => (
      [
        ...prevData,
        {
          ...product,
          quanty: 1
        }
      ]
    ))
    }
    
  }

  console.log(cart)

  const removeProductCart = (product) => setCart(prevCart => prevCart.filter(items => items.id !== product.id))
  
  const clearProdcutCart = () => setCart([])

  const decrement = (product) => {
    const productInCart = cart.find(item => item.id === product.id);

     if(productInCart) {
      setCart(prevData => {
        const dataResult = cart
          .map(item => item.id === product.id ? {...item, quanty: item.quanty - 1} : item  )
          .filter(item => item.quanty > 0);

          return dataResult
      })
    }
  }
  
  return (
    <CartContext.Provider value={
     { addProductCart,
      removeProductCart,
      clearProdcutCart,
      decrement,
      cart }
    }>
      {children}
    </CartContext.Provider>
  )
}