import React from 'react'
import './GlobalNotification.css'
import { StoreContextCreated } from '../../StoreContext'
import  {useContext}  from 'react'


function GlobalNotification() {

    const {globalNotificationShow}=useContext(StoreContextCreated)
  return (

    <>{globalNotificationShow.show===true?
    <div className='container'>
        <h2>{globalNotificationShow.headline}</h2>
        <img src={globalNotificationShow.image} alt='notificaton images ' />
        <h3>{globalNotificationShow.message}</h3>

    </div>:null}
    </>
  )
}

export default GlobalNotification