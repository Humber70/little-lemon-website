import style from './AppForm.module.css'

export default function AppForm ({children}) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      {children}
    </form>
  )
}