import styles from './Testimonials.module.css'

export default function Testimonials () {
  return (
    <section className={styles.testimonials}>
      <header className={styles.headSectionTitle}>
        <h1>Testimonials</h1>
      </header>
      <div className={styles.contentTestimonials}>
        <article>
          <span>⭐⭐⭐⭐⭐</span>
          <figure>
            <img src="/images/profile_1.webp" alt="profile-testimonials" />
            <h1>Sarah J</h1>
          </figure>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eligendi mollitia. Enim eum vel vero fuga ut voluptatibus</p>
          </div>
        </article>

        <article>
          <span>⭐⭐⭐⭐⭐</span>
          <figure>
            <img src="/images/profile_2.webp" alt="profile-testimonials" />
            <h1>Mark T</h1>
          </figure>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eligendi mollitia. Enim eum vel vero fuga ut voluptatibus</p>
          </div>
        </article>

        <article>
          <span>⭐⭐⭐⭐⭐</span>
          <figure>
            <img src="/images/profile_3.webp" alt="profile-testimonials" />
            <h1>Elena R</h1>
          </figure>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eligendi mollitia. Enim eum vel vero fuga ut voluptatibus</p>
          </div>
        </article>

        <article>
          <span>⭐⭐⭐⭐⭐</span>
          <figure>
            <img src="/images/profile_4.webp" alt="profile-testimonials" />
            <h1>David W</h1>
          </figure>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eligendi mollitia. Enim eum vel vero fuga ut voluptatibus</p>
          </div>
        </article>
      </div>
    </section>
  )
}