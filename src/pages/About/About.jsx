import style from './About.module.css'

export default function About () {
  return (
    <>
      <section className={style.sectionAboutPage}>
        <section className={style.sectionContentAboutPage}>
          <div>
            <h1>Our Story</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatibus, voluptas fuga voluptatem quod adipisci debitis blanditiis distinctio perferendis repellat mollitia hic facilis nobis aliquam tenetur itaque totam. Saepe, sequi!</p>
          </div>
          <div>
            <img src="/images/restaurant-about.webp" alt="image-about" />
          </div>
        </section>
      </section>

      <section className={style.sectionAboutFounders}>
        <h1>Founders</h1>
        <section className={style.sectionContentFounders}>
          <article>
            <figure>
              <img src="/images/adrian-founder.webp" alt="image-founder-adrian" />
            </figure>
            <div className={style.contentFounders}>
              <div>
                <h3>Adrian</h3>
                <span>Co founders</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis adipisci voluptatem, aut temporibus modi corporis totam culpa deleniti laudantium beatae, dicta unde ab natus?</p>
            </div>
          </article>

          <article>
            <figure>
              <img src="/images/mario-founder.webp" alt="image-founder-mario" />
            </figure>
            <div className={style.contentFounders}>
              <div>
                <h3>Mario</h3>
                <span>Co founders</span>
              </div>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis adipisci voluptatem, aut temporibus modi corporis totam culpa deleniti laudantium beatae, dicta unde ab natus?</p>
            </div>
          </article>
        </section>
      </section>

      <section className={style.sectionGallery}>
        <section className={style.sectionContentGallery}>
          <h1>Atmosphere</h1>
          <hr />

          <section className={style.sectionDisplayGallery}>
            <div className={style.contentGallery}>
              <img src="/images/restaurant1.webp" alt="image-gallery"/>
              <img src="/images/restaurant-about.webp" alt="image-gallery-1"/>
              <img src="/images/grilled-fish.webp" alt="image-gallery-2"/>
              <img src="/images/lemon-dessert.webp" alt="image-gallery-3"/>
              <img src="/images/greek-salad.webp" alt="image-gallery-4"/>
              <img src="/images/lemon-dessert.webp" alt="image-gallery-3"/>
            </div>
          </section>
        </section>
      </section>
    </>
  )
}