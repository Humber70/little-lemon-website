import style from './AppForm.module.css'

export default function AppForm ({children}) {
  return (
    <form className={style.form} onSubmit={e => e.preventDefault()}>
      {children}
    </form>
  )
}