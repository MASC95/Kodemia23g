import React, { useEffect } from "react";
import './homecandidate.scss'

export const HomeCandidate=()=>{
    useEffect(() => {
      console.log('componente cargado:..');
    
      
    }, [])
    
    return(
        <header className="background-image">
            <div className="wrapper">
            <div className="logo">

            </div>
            <div className="welcome-text">
            <h1></h1>
            <h2 className="welcome-jobinder d-flex justify-content-center" >Looking for a Job? Find Your Next Opportunity with Us</h2>
            </div>
            </div>
        </header>
    )
}
export default HomeCandidate