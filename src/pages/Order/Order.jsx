import Cart from "@/components/Cart/Cart";
import style from './Order.module.css'
import { useCart } from '@/hooks/useCart'
import { NavLink } from 'react-router'

const PRICE_DELIVERY = 5.00

export default function Order () {

  const { cart } = useCart()
  
  const tatalCartPrice = cart.reduce((acc, current) => {
    const numberPrice = parseFloat(current.price)

    const numberResult = !isNaN(numberPrice) ? acc + numberPrice * current.quanty : acc

    return Math.ceil(numberResult)
  }, 0)

  const taxDelivery = tatalCartPrice >= 1 ? tatalCartPrice + parseInt(PRICE_DELIVERY) : '--'


  const renderOrders = cart.map(elements => (
    <section key={elements.title}>
      <div className={`${style.orderDescription} ${style.mark}`}>
        <h2>{elements.title}</h2>
        <p>x {elements.quanty} $ {elements.price * elements.quanty}</p>
      </div>
      <hr />
    </section>
  ))

  return (
    <section className={style.contentOrder}>
      <section className={style.sectionOrder}>

        <h2>🛍️ your order</h2>
        {renderOrders}

        <div className={style.orderDescription}>
          <h2>Subtotal</h2>
          <p>$ {tatalCartPrice}</p>
        </div>

        <div className={style.orderDescription}>
          <h2>Delivery Fee</h2>
          <p>$ 5.00</p>
        </div>

        <hr />
        <div className={style.orderDescription}>
          <h2>Total</h2>
          <span>$ {taxDelivery}</span>
        </div>

        <div>
          {cart.length <= 0 ? <NavLink to='/menu'>view menu</NavLink> : <button>Go to checkout</button>}
        </div>
      </section>
      <Cart />
    </section>
  )
}