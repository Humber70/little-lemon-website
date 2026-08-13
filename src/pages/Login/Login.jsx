import style from './Login.module.css'
import AppForm from '@/components/AppForm/AppForm'
import Button from '@/components/Button/Button'

export default function Login () {

  return (
    <section className={style.contentLogin}>
      
      <input type="radio" name="sections" id="register" className={style.registerInput} defaultChecked/>
      <input type="radio" name="sections" id="login" className={style.loginInput}/>

      <label className={style.tabRegister} htmlFor="register">Sign up</label>
      <label className={style.tabLogin} htmlFor="login">Log in</label>

      <section id="section-register" className={style.sectionRegister}>
        <header>
          <h1>Sign in</h1>
        </header>
        <AppForm>
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' name='name'/>

          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id='last_name' name='last_name'/>

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required/>

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />

          <label htmlFor="password">Repeat Password:</label>
          <input type="password" name="repeat_password" id="repeat_password" required/>

          <Button>Sign up</Button>
        </AppForm>
      </section>
      
      <section id="section-login" className={style.sectionSign}>
        <header><h1>Log in</h1></header>
        <AppForm>
          <label htmlFor="email">Email:</label>
          <input type="email" id='email' required/>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required/>

          <Button>Log in</Button>

          <a href="#">I forgot the password</a>
        </AppForm>
      </section>
    </section>
  )
}