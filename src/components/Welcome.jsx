import Sammy from "../img/sammy.jpeg";
import "../css/main.css";
import React, { useState, useEffect } from 'react';
import Options from "../components/Options";

export default function Welcome() {
    const [butt, setButt] = useState();

return (
<>
<div className="wrapper">
<h1>Elias Baez</h1>
<p>I need a job.</p>
<img src={Sammy} alt="Sammy Image" width={200} height={200}/>
<Options setButt={setButt}/>
<p>You pressed: {butt}</p>
</div>
</>
);
}
