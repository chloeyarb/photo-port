import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // the hook that manages the form data. formstate has 3 key-value pairs to rep the 3 user inputs
    const [formState, setFormState] = useState({ name:'', email:'', message:''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // function to sync the state of the component formState w/ user inputs
    function handleChange(e) {
        //if the input is email then validate the value and assign return to isvalid.
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        }else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // only allows the state to update with the user input if there is no error message
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }
    // Submit button click prevent default action
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    //DOM elements in contact form using JSX.
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm;

