import React from 'react'
import "./scss/style.scss"
const Alert = () => {
  return (
    
    <div className='notification'>
        <h4 className='d-flex align-items-center text-secondary'>Felicidades!</h4>
        <p className=''>Haz aplicado correctamente a esta vacante</p>
        <span className='notification__progress text-ligth'></span>
    </div>
   
  )
}

export default Alert