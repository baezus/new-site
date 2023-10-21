import Sammy from "../../img/sammy.jpeg";
import "../../css/main.css";
import React, { useState, useEffect } from 'react';

export default function Welcome() {
    const [butt, setButt] = useState();

    useEffect(() => {
        if(butt) {
            console.log("Butt has changed to " + butt);        }
    }, [butt])

return (
    <>
        <div className="wrapper">
            <h1>Elias Baez</h1>
            <p>I need a job.</p>
            <img src={Sammy} alt="Sammy Image" width={200} height={200}/>
            <p>You pressed: {butt}</p>
        </div>
    </>
);
}