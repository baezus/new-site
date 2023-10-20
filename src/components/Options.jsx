import React, { useState, useEffect } from 'react';
import "./Welcome";

const Options = ({ setButt }) => {
    const [which, setWhich] = useState("");
    const [click, setClick] = useState(false);

    useEffect(()=>{
        console.log("clicked: "+ which);
    }, [click]);

    const handleClick = (e) => (button) => {
      setClick(!click)
      setWhich(button.target.name);
      setButt(button.target.name);
    };

    return(
        <div className="main"> 
        <div className="buttons">
          <button name="contact" className="button is-primary" onClick={handleClick()}>contact</button>
          <button name="resume" onClick={handleClick()} className="button is-link">resume</button>
          <button name="portfolio" onClick={handleClick()} className="button is-info">portfolio</button>
        </div>
      </div>
    )
}

export default Options;