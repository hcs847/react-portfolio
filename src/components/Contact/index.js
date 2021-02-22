import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { IoMdSend } from "react-icons/io";

const ContactForm = function () {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // form validation
    function handleChange(e) {
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
        console.log(formState);
        setFormState({ name: '', email: '', message: '' })
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id='contact-form' onSubmit={hanldeSubmit}>
                <div >
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name='name' />
                </div>
                <div >
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div >
                    <label htmlFor="message">Message:</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                </div>
                {/* if error messages are available render it */}
                {errorMessage && (
                    <div>
                        <p className='errorText'>{errorMessage}</p>
                    </div>
                )}
                <button className='btn btn-contact' type='submit'><span className='icon'><IoMdSend /></span>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;
