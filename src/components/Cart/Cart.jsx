import { useCart } from '@/hooks/useCart'
import CartItem from '@/components/CartItem/CartItem';
import style from './Cart.module.css'

export default function Cart () {

  const { cart, removeProductCart, clearProdcutCart, addProductCart, decrement } = useCart()

  const isCartEmpty = cart.length !== 0;

  return (
    <section className={style.contentCart}>
      {isCartEmpty
        ? <button className={style.buttonClearAll} onClick={clearProdcutCart}>clear all</button>
        : <h1>There is no order.</h1>
      }
      
      <div className={style.contentCartItems}>
        {cart?.map(e => <CartItem key={e.title} removeItem={() => removeProductCart(e)} addItem={() => addProductCart(e)} decrementItem={() => decrement(e)} {...e} />)}
      </div>
    </section>
  )
}