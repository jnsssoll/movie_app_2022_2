import React from "react";
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Computers are incredibly fast, accurate, and stupid.
                Human beings are incredibly slow, inaccurate, and brilliant.
                Together they are powerful beyond imagination."
            </span>
            <span>- Albert Einstein</span>
        </div>
    );
}

export default About;