import React, { useState } from 'react';

function ContactForm() {
    // the hook that manages the form data. formstate has 3 key-value pairs to rep the 3 user inputs
    const [formState, setFormState] = useState({ name:'', email:'', message:''});
    const { name, email, message } = formState;

    // function to sync the state of the component formState w/ user inputs
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
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
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm;

