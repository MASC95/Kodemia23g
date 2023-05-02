import React from 'react'
import "./popups.scss";

const Popups = () => {
  return (
    
    <div className='notification'>
        <h4 className='d-flex align-items-start text-secondary'>Felicidades!</h4>
        <p className=''>Haz aplicado correctamente a esta vacante</p>
        <span className='notification__progress text-ligth'></span>
    </div>
   
  )
}

export default Popups