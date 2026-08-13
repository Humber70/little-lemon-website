import style from './Reservations.module.css'
import clsx from 'clsx'
import { useState } from 'react'


const resetDataForm = {
  date: '',
  time: '',
  guest: '',
  type: ''
}

export default function Reservations () {

  const [dataForm, setDataForm] = useState({
    date: '',
    time: '',
    guest: '',
    type: ''
  })

  const [messageError, setMessageError] = useState({
    errorDate: false,
    errorTime: false,
    errorGuest: false,
    errorType: false,

  })

  const [modal, setModal] = useState(false)
  const [reserve, setReserve] = useState(resetDataForm)


  const handleSubmit = (event) => {
    event.preventDefault();


    !dataForm.date 
      ? setMessageError(prev  => ({...prev, errorDate: true})) 
      : setMessageError(prev  => ({...prev, errorDate: false}))
      
      
    !dataForm.time 
      ? setMessageError(prev => ({...prev, errorTime: true}))
      : setMessageError(prev  => ({...prev, errorTime: false}))


    !dataForm.guest 
      ? setMessageError(prev => ({...prev, errorGuest: true})) 
      : setMessageError(prev  => ({...prev, errorGuest: false}))

    !dataForm.type 
      ? setMessageError(prev => ({...prev, errorType: true})) 
      : setMessageError(prev  => ({...prev, errorType: false}))

    const isAllCorrect = Object.values(dataForm).every(e => e)

    isAllCorrect ? setModal(true) : setModal(false)
    

  }

  const handleChanges = (event) => {

    if(event.target.name === 'date') setDataForm( prev => ({...prev ,date: event.target.value}))
    if(event.target.name === 'time') setDataForm( prev => ({...prev ,time: event.target.value}))
    if(event.target.name === 'number') setDataForm( prev => ({...prev ,guest: event.target.value}))
    if(event.target.name === 'type') setDataForm( prev => ({...prev ,type: event.target.value}))
    
  }

  const handleCancel = () => {
    setDataForm(resetDataForm)
    setModal(false)
  }

  const handleConfirm = () => {
    setDataForm(resetDataForm)
    setReserve(dataForm)
    setModal(false)
  }

  console.log(reserve)
  
  return (
    <>
      <section className={style.sectionReservation}>
        <div className={style.reservationResume}>
          <h1>My reservations</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, voluptatibus reiciendis inventore quos ipsa, molestiae eos rem placeat, commodi quo totam. Quaerat nobis optio quae? Officia deserunt ex laboriosam nemo!</p>
        </div>
        <img className={style.imageReservation} src="/images/restaurant-about.webp" alt="restaurant-reservation" />
      </section>

      <section className={style.sectionFormReservation}>
        <form onSubmit={handleSubmit} action="#">

            <div className={clsx(style.itemChooseDate, style.label)}>
              <label htmlFor="date">Choose Date</label>
              <input onChange={handleChanges} type="date" name='date' id='date' value={dataForm.date}/>
              {messageError.errorDate && <span className={style.messageError}>Choose a valid date</span>}
            </div>
            
            <div className={clsx(style.itemTime, style.label)}>
              <label htmlFor="time">Choose Time</label>
              <select onChange={handleChanges} name="time" id="time" value={dataForm.time}>
                <option value=""> Select a time </option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </select>
              {messageError.errorTime && <span className={style.messageError}>Choose a valid time</span>}
            </div>

            <div className={clsx(style.itemNumber, style.label)}>
              <label htmlFor="number">Number of Guest</label>
              <input onChange={handleChanges} type="number" name="number" id="number" value={dataForm.guest}></input>
              {messageError.errorGuest && <span className={style.messageError}>Choose a valid number</span>}
            </div>

            <div className={clsx(style.ocassion, style.label)}>
              <label htmlFor="type">Ocassion</label>
              <select onChange={handleChanges} name="type" id="type" id="type" value={dataForm.type}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Business Meeting">Business Meeting</option>
                <option value="Other">Other</option>
              </select>
              {messageError.errorType && <span className={style.messageError}>Choose a valid ocassion</span>}
            </div>
            <div className={clsx(style.button, style.label)}>
              <hr style={{ marginBottom: '30px'}}/>
              <button className={clsx(style.buttonReserve)}>Book a table</button>
            </div>
        </form>
      </section>
        {
          modal && 
          <>
            <section className={style.modal}>
              <div className={style.modalConfirm}>
                <div className={style.infoHeader}>
                  <h2>Your reservation is almost ready👌</h2>
                  <hr />
                </div>
                <div className={style.infoData}>
                  <h2>Date:</h2>
                  <p>{dataForm.date}</p>

                  <h2>Time</h2>
                  <p>{dataForm.time} <strong>hs</strong></p>
                </div>

                <div className={style.infoDataPlus}>
                  <h2>Number of Guest</h2>
                  <p>{dataForm.guest}</p>

                  <h2>Ocassion</h2>
                  <p>{dataForm.type}</p>
                </div>

                <div className={style.modalButtons}>
                  <button className={style.buttonConfirm} onClick={handleConfirm}>Confirm</button>
                  <button className={style.buttonCancel} onClick={handleCancel}>Cancel</button>
                </div>
              </div>
            </section>
          </>
        }
        {
          Object.values(reserve).some(item => item) && <>
            <section className={style.resultReservations}>
              <h1>Your reservations</h1>

              <div className={style.myReservations}>
                <p>at {reserve.time} hs</p>
                <p>{reserve.guest} guest</p>
                <p>{reserve.type === 'Other' ? 'Unspecified Ocassion' : `Ocassion: ${reserve.type}`}</p>
              </div>
            </section>
          </>
        }
    </>
  )
}