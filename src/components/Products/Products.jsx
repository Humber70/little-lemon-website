import style from './Products.module.css'
import clsx from 'clsx'
import { NavLink } from 'react-router'
import { useCart } from '@/hooks/useCart.js'

export default function Products ({ dataProducts, variantStyle = '' }) {

  const { cart, addProductCart } = useCart();
  const isProductInCart = cart.findIndex(cartItem => cartItem.id === dataProducts.id)


  return (
    <article key={dataProducts.title} className={clsx(style.productContent, style[variantStyle])}>
      <figure>
        <img src={dataProducts.image} alt={dataProducts.title} className={style.imageProduct}/>
      </figure>

      <div className={style.productsDescription}>
        <div className={style.displayPriceTitle}>
          <h3>{dataProducts.title}</h3>
          <span>${dataProducts.price}</span>
          
        </div>
        {dataProducts.isSpecial && <span className={style.specialsToday}>special today</span>}
        
        <p>{dataProducts.description}</p>
        <div className={style.buttonOrderDelivery}>
          
          {isProductInCart >= 0 ? <NavLink className={style.button} to='/order'>View Order added</NavLink> : <button onClick={() => addProductCart(dataProducts)}>Order Delivery</button>}
          
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-motorbike"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" /><path d="M13 6h2l1.5 3l2 4" /></svg>
        </div>
      </div>
    </article>
  )
}