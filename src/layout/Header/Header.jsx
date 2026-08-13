import style from './Header.module.css'
import imageLog from '@/assets/logo.svg'
// import iconHomeLink from '@/assets/icons/home-icon.svg'

import { useCart } from '@/hooks/useCart'

import iconBar from '@/assets/icons/icon_hamburger_menu.svg'
import iconCart from '@/assets/icons/basket.svg'
import iconBarClose from '@/assets/icons/icon-close.svg'

import {NavLink} from 'react-router'

export default function Header () {

  const { cart } = useCart()

  const isAnyCart = cart.length > 0 && ( <span className={style.counterCart}>{cart.length}</span> );

  return (
    <header className={style.header}>

      <input type="checkbox" id="check-icon"/>
      <label htmlFor="check-icon">
       <img src={iconBar} alt="icon-bar" className={style.iconBarOpen}/>
      </label>
      <img src={imageLog} alt="lttle-lemon" />
      <NavLink to='/order'>
        <img src={iconCart} alt="icon-cart" className={style.iconCart}/>
        {isAnyCart}
      </NavLink>

      <nav className={`${style.navigator}`}>
        <label htmlFor="check-icon">
          <img src={iconBarClose} alt="icon-close" className={style.iconClose} />
        </label>
        <ul>
          <li>
            <NavLink to="/">
              <label htmlFor="check-icon">
                <svg className={style.iconHome} width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <path d="M13.9662 5.73305L5.42372 12.7479V20.3189C5.42372 20.5149 5.50182 20.7029 5.64085 20.8415C5.77987 20.9801 5.96844 21.058 6.16505 21.058L11.3572 21.0446C11.5531 21.0436 11.7407 20.9653 11.879 20.8268C12.0172 20.6883 12.0948 20.5009 12.0948 20.3055V15.8841C12.0948 15.6881 12.1729 15.5001 12.3119 15.3614C12.4509 15.2228 12.6395 15.145 12.8361 15.145H15.8015C15.9981 15.145 16.1866 15.2228 16.3257 15.3614C16.4647 15.5001 16.5428 15.6881 16.5428 15.8841V20.3022C16.5425 20.3995 16.5614 20.4959 16.5986 20.5858C16.6357 20.6757 16.6902 20.7575 16.7591 20.8264C16.828 20.8953 16.9098 20.9499 16.9999 20.9872C17.09 21.0245 17.1866 21.0437 17.2841 21.0437L22.4744 21.058C22.671 21.058 22.8596 20.9801 22.9986 20.8415C23.1376 20.7029 23.2157 20.5149 23.2157 20.3189V12.7428L14.6751 5.73305C14.5747 5.65236 14.4496 5.60836 14.3206 5.60836C14.1917 5.60836 14.0666 5.65236 13.9662 5.73305ZM27.4599 10.5009L23.5864 7.31756V0.919002C23.5864 0.77198 23.5278 0.63098 23.4235 0.527019C23.3193 0.423059 23.1778 0.364655 23.0304 0.364655H20.4357C20.2883 0.364655 20.1468 0.423059 20.0426 0.527019C19.9383 0.63098 19.8797 0.77198 19.8797 0.919002V4.27327L15.7315 0.870497C15.3334 0.543884 14.8339 0.365307 14.3183 0.365307C13.8028 0.365307 13.3032 0.543884 12.9052 0.870497L1.1768 10.5009C1.1205 10.5473 1.07392 10.6043 1.03972 10.6687C1.00553 10.733 0.984381 10.8034 0.977497 10.8759C0.970612 10.9484 0.978123 11.0216 0.999601 11.0912C1.02108 11.1608 1.0561 11.2255 1.10267 11.2816L2.28417 12.7137C2.33061 12.77 2.38773 12.8166 2.45227 12.8509C2.5168 12.8851 2.58748 12.9064 2.66025 12.9134C2.73303 12.9203 2.80647 12.913 2.87638 12.8916C2.94629 12.8703 3.01129 12.8354 3.06767 12.789L13.9662 3.83903C14.0666 3.75834 14.1917 3.71433 14.3206 3.71433C14.4496 3.71433 14.5747 3.75834 14.6751 3.83903L25.5741 12.789C25.6304 12.8354 25.6953 12.8703 25.7651 12.8917C25.8349 12.9132 25.9082 12.9206 25.981 12.9138C26.0537 12.9069 26.1243 12.8858 26.1889 12.8517C26.2534 12.8176 26.3106 12.7712 26.3571 12.7151L27.5386 11.283C27.5851 11.2266 27.62 11.1615 27.6412 11.0916C27.6625 11.0217 27.6696 10.9483 27.6623 10.8756C27.655 10.8029 27.6333 10.7324 27.5986 10.6681C27.5638 10.6038 27.5167 10.547 27.4599 10.5009Z" fill="#495E57"/>
                </svg>
                Home
              </label>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={ ({isActive}) => isActive ? 'active': '' }>
              <label htmlFor="check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
                About
              </label>
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <label htmlFor="check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-list"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" /><path d="M9 12l.01 0" /><path d="M13 12l2 0" /><path d="M9 16l.01 0" /><path d="M13 16l2 0" /></svg>
                Menu
              </label>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations">
              <label htmlFor="check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-list"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" /><path d="M9 12l.01 0" /><path d="M13 12l2 0" /><path d="M9 16l.01 0" /><path d="M13 16l2 0" /></svg>
                Reservations
              </label>
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <label htmlFor="check-icon">
                <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.148 17.1429H0.376007V20H28.376V17.1429H24.148ZM26.976 15.7143C26.598 9.9 22.426 5.14286 16.952 3.98571C17.092 3.64286 17.176 3.25714 17.176 2.85714C17.176 1.28571 15.916 0 14.376 0C12.836 0 11.576 1.28571 11.576 2.85714C11.576 3.25714 11.66 3.64286 11.8 3.98571C6.32601 5.14286 2.15401 9.9 1.77601 15.7143H26.976ZM14.376 6.54286C18.506 6.54286 22.034 9.15714 23.476 12.8429H5.27601C6.71801 9.15714 10.246 6.54286 14.376 6.54286Z" fill="#495E57"/>
                </svg>

                Order Online
              </label>
            </NavLink>
          </li>
          <li>
            <NavLink className={style.login} to="/login">
              <label htmlFor="check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-login-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" /><path d="M3 12h13l-3 -3" /><path d="M13 15l3 -3" /></svg>

                Login
              </label>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}