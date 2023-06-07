import React, { useState, useEffect } from "react";
import './homecandidate.scss';

const HomeCandidate = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 9000);

        return () => clearTimeout(timer);
    }, []);

    return (
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
