import React, { useState, useEffect } from 'react';
import "./pages/Welcome";

const Options = ({ setButt }) => {
    const [which, setWhich] = useState("");
    const [click, setClick] = useState(false);

    useEffect(()=>{
        if (click){
          console.log("click true: "+ which);
          setClick(false);
        } else {
          console.log("click false");
        };
    }, [click]);

    const handleClick = (e) => (button) => {
      setClick(!click)
      setWhich(button.target.name);
      setButt(button.target.name);
    };

    return(
        <div className="main"> 
        <div className="buttons">
          <button type="button" name="contact" className="button is-primary" onClick={handleClick()}>contact</button>
          <button type="button" name="resume" onClick={handleClick()} className="button is-link">resume</button>
          <button type="button" name="portfolio" onClick={handleClick()} className="button is-info">portfolio</button>
        </div>
      </div>
    )
}

export default Options;