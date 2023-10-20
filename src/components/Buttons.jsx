import React, { useState } from 'react';

const Buttons = () => {
    const[which, setWhich] = useState({
        contact: "contact",
        resume: "resume",
        portfolio: "portfolio"
    });

    const HandleClick = (key) =>{
        setWhich(state => ({...state, [key]: state[key] }));
    }

    const handleChange = (event) => {
        let val = event.target.name;
        if (val === "nameLabel") {
            setName(event.target.value);
        } else if (val === "infoLabel") {
            setInfo(event.target.value);
        } else if (val == "msgArea") {
            setMsg(event.target.value);
        }
    }

    return (
        <div>
            <button className={"Contact"} onClick={HandleClick('contact')}>Information</button>
            <button className={"Resume"} onClick={HandleClick('resume')}>Resume</button>
            <button className={"Portfolio"} onClick={HandleClick('portfolio')}>Portfolio</button>
        </div>
   )
}

export default Buttons;