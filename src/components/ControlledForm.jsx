import React, { useState } from 'react';

function ControlledForm() {
    const [name, setName] = useState('');
    const [info, setInfo] = useState('');
    const [msg, setMsg] = useState('');

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

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('A value was submitted: ' + name + ' ' + ' with the info: ' + info + 'and message: ' + msg);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input 
                  type="text"
                  name="nameLabel" 
                  value={name} 
                  onChange={handleChange}/>
            </label>
            <label>
                Contact Information:
                <input 
                  type="text"
                  name="infoLabel"
                  value={info} 
                  onChange={handleChange}
                  />
            </label>
            <label>
                Message:
                <input 
                  type="textArea"
                  name="msgArea"
                  value={msg} 
                  onChange={handleChange}
                  />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default ControlledForm;
