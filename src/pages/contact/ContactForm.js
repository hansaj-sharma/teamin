import React from 'react'

export default function ContactForm() {
    return (
        <form className="contact-form">
            <h2>An expert at you services</h2>
            <label>
                <span>Your name</span>
                <input type="text" />
            </label>
            <label>
                <span>Your email</span>
                <input type="email" />
            </label>
            <label>
                <span>Phone Number</span>
                <input type="text" />
            </label>
            <label>
                <span>Message</span>

                <textarea />
            </label>
        </form>
    )
}
