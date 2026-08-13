import style from './Home.module.css'
import { NavLink } from 'react-router'
import { products } from '@/mocks/data.json'

import Products from '@/components/Products/Products'
import Hero from '@/components/Hero/Hero'
import Testimonials from '@/components/Testimonials/Testimonials'

export default function Home () {

  const listProdcutsWeekSpecials = 
  products
  .filter(items => items.isSpecial)
  .map( card => <Products key={card.title} dataProducts={card} variantStyle='home'/>)

  return (
    <>
      <Hero />
      <section className={style.sectionProducts}>
        <header className={style.headSectionMain}>
          <h1>This week specials!</h1>
          <NavLink to="/menu">Online Menu</NavLink>
        </header>
        <div className={style.sectionSpecialProducts}>
          {listProdcutsWeekSpecials}
        </div>
      </section>
      <Testimonials />
      <section className={style.sectionAboutHome}>
          <div className={style.sectionContentAbout}>
            <h2>Little Lemmon</h2>
            <h3>Chicago</h3>
            <p><strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae optio velit numquam magnam eos totam, porro voluptatibus, distinctio officia ipsa reiciendis nemo excepturi sed. Maiores vel eveniet doloremque unde atque!</strong></p>
          </div>
          <div className={style.setctionImages}>
            <img src="/images/Mario.webp" alt="mario-profile" />
            <img src="/images/Adrian.webp" alt="adrian-profile" />
          </div>
      </section>
    </>
  )
}