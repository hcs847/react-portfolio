import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { IoMdSend } from "react-icons/io";
import emailjs from 'emailjs-com';
require('dotenv').config();

const ContactForm = function () {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    // form field changes for state
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    // form validation
    function handleError(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            !isValid ? setErrorMessage('Please enter a valid email address') : setErrorMessage('');
        }
        // check message and name fields have been populated
        else {
            !e.target.value.length ? setErrorMessage(`${e.target.name} is required.`) : setErrorMessage('');
        }
        // once no errors are present, update the form state (inputs) by adding the last value to current available
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }




    function hanldeSubmit(e) {
        e.preventDefault();
        console.log("formState", formState);
        // emailjs handling to route form responses to gmail
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setFormState({ name: '', email: '', message: '' })
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id='contact-form' onSubmit={hanldeSubmit}>
                <div >
                    <label htmlFor="name">Name:</label>
                    <input
                        placeholder="Full Name"
                        type="text"
                        name='name'
                        value={name}
                        onChange={handleChangeForm}
                        onBlur={handleError}
                    />
                </div>
                <div >
                    <label htmlFor="email">Email address:</label>
                    <input
                        placeholder="Your email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChangeForm}
                        onBlur={handleError}
                    />
                </div>
                <div >
                    <label htmlFor="message">Message:</label>
                    <textarea
                        placeholder="Your message"
                        name='message'
                        value={message}
                        onChange={handleChangeForm}
                        onBlur={handleError}
                        rows='5' />
                </div>
                {/* if error messages are available render it */}
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button className='btn btn-contact' type='submit'><span className='icon'><IoMdSend /></span>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;
