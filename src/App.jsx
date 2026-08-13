import style from './App.module.css'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className={style.appContainer}>
      <Header />
      <main className={style.sectionMain}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
