import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ControlledForm() {
    const form = useRef();
    const [to_name, setTo_name] = useState('');
    const [from_name, setFrom_name] = useState('');
    const [message, setMessage] = useState('');
    const [cancel, setCancel] = useState(false);

    const handleChange = (event) => {
        let val = event.target.name;
        if (val === "to_name") {
            setTo_name(event.target.value);
        } else if (val === "from_name") {
            setFrom_name(event.target.value);
        } else if (val == "message") {
            setMessage(event.target.value);
        }
    }

    const handleCancel = (event) => {
        event.preventDefault();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('A value was submitted: ' + to_name + ' ' + ' with the info: ' + from_name + ' and message: ' + message);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        alert('sending email');

        emailjs.sendForm('service_z07c2y8', 'default', form.current, 'EIYrNMaP50haIWYG_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <form ref={form} onSubmit={sendEmail}>
        <div className="field">
            <label>
                Name
                <input 
                  className="control"
                  type="text"
                  placeholder="Your Name"
                  name="to_name" 
                  value={to_name} 
                  onChange={handleChange}/>
            </label>
        </div>
        <div className="field">
            <label>
                Your Email Address
                <input 
                  type="text"
                  placeholder="your@email.address"
                  className="control"
                  name="from_name"
                  value={from_name} 
                  onChange={handleChange}
                  />
            </label>
        </div>
        <div className="field">
            <label>
                Message
                <input 
                  type="textArea"
                  className="control"
                  placeholder="What do you want to say?"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  />
            </label>
        </div>
        <div className="field is-grouped">
            <div className="control">
                <input type="submit" className="button is-link" value="Send" />
            </div>
        </div>
        </form>
    )
}

export default ControlledForm;
