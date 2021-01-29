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

        window.open(`mailto:connorshea15@gmail.com?subject=${formState.subject}&body=${formState.message}`);

        setFormState({
            subject: '',
            message: ''
        });
    }

    return (
        <section>
                <h1 className="text-center">Contact</h1>
                <form id="contact-form" className="img-responsive mx-auto p-4 border rounded" onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label htmlFor="name">Name: </label>
                        <div>
                            <input class="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">Email address: </label>
                        <div>
                            <input class="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="subject">Subject: </label>
                        <div>
                            <input class="form-control" type="text" name="subject" defaultValue={subject} onBlur={handleChange} />
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="message">Message: </label>
                        <div>
                            <textarea class="form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p>{errorMessage}</p>
                            </div>
                        )}
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </section>
    );
}

export default Contact;