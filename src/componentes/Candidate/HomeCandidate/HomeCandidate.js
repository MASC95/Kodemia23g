import React, { useEffect, useState } from "react";
import './homecandidate.scss'

export const HomeCandidate=()=>{
    const [showText, setshowText] = useState(false);
    useEffect(() => {
      console.log('componente cargado:..');
    
      
    }, [])
    
    return(
        <header className="background-image">
            <div className="wrapper">
                <div className="logo"></div>
                <div className="welcome-text">
                    <h1 className="message"></h1>
                    {showText && <h2 className="jobinder-text" data-text='jobinder...'>jobinder...</h2>}
                </div>
            </div>
        </header>
    );
};

export default HomeCandidate;
