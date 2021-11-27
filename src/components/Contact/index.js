import React, { useState } from 'react';

import { validateEmail } from '../../utilis/helper';

function Contact() {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'fullName') {
            setFullName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {

        if (!email || !fullName || !message) {
            setErrorMessage('Please enter your name, email and a message.');
            return;

        } else if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email.');
            return;
        }
        alert(`Thank you for getting in touch.  I'll get back to you shortly.`);

        setFullName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div className="container contact">
            <h1>Contact Me</h1>
            <p>Want to get in touch? Fill out this form to send me a message.</p>
            <form className="form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Full Name"
                        value={fullName}
                        name="fullName"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="textarea"
                        placeholder="message"
                        className="form-control"
                        rows="3"
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleFormSubmit} >Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;