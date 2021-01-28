import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Form from 'react-bootstrap/Form';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const { name, email, subject, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        console.log(errorMessage);
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("formState: " + formState.subject);
        window.open(`mailto:connorshea15@gmail.com?subject=${formState.subject}&body=${formState.message}`);
    }

    return (
        <section className="form">
            <div>
                <h1 className="text-center">Contact</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <div>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <label htmlFor="email">Email address: </label>
                    <div>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <label htmlFor="subject">Subject: </label>
                    <div>
                        <input type="text" name="subject" defaultValue={subject} onBlur={handleChange} />
                    </div>
                    <label htmlFor="message">Message: </label>
                    <div>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;