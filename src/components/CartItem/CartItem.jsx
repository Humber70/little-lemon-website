import style from './CartItem.module.css'

export default function CartItem ({removeItem, addItem, decrementItem, title, description, price, quanty}) {

  return (
    <article className={style.cartItem}>
      <div className={style.itemTitle}>
        <h1>{title}</h1>
        <button onClick={removeItem} className={style.buttonDelete}>Delete</button>
      </div>
      <p>{description}</p>
      <div className={style.priceItem}>
        <h1>$ {price * quanty}</h1>
      </div>
      <div className={style.counterItem}>
        <button onClick={addItem} className={style.buttonActions}>+</button>
        <strong>x{quanty}</strong>
        <button onClick={decrementItem} className={style.buttonActions}>-</button>
      </div>
    </article>
  )
}