import style from './Footer.module.css'
import { NavLink } from 'react-router'


export default function Footer () {
  return (
    <footer className={style.footer}>
      <section className={style.contentFooter}>
        <div>
          <img src="/images/logo-footer.webp" alt="logo-little-lemmon" />
        </div>
        <div className={style.sectionInformation}>
          <ul>
            <h2>doormat navigation</h2>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/menu'>Menu</NavLink>
            </li>
            <li>
              <NavLink to='/reservations'>Reservations</NavLink>
            </li>
            <li>
              <NavLink to='/order'>Order Online</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          </ul>

          <ul>
            <h2>Contact</h2>
            <li>
              <address>address</address>
            </li>
            <li>
              <strong>phone</strong>
            </li>
            <li>
              <p>email</p>
            </li>
          </ul>

          <ul>
            <h2>Social media links</h2>
            <li>
              <a href='#'>Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href='#'>Discord</a>
            </li>
          </ul>
        </div>

      </section>
    </footer>
  )
}