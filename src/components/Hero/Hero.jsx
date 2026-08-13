import style from './Hero.module.css'
import { NavLink } from 'react-router'

export default function Hero () {
  return (
    <section className={style.hero}>
      <div className={style.contentHero}>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <NavLink to="/reservations" className={style.linkToReserve}>Reserve table</NavLink>
        </div>
        <div>
          <img src='/images/restauranfood.webp' alt="image-hero" className={style.imageHero}/>
        </div>
      </div>
    </section>
  )

}