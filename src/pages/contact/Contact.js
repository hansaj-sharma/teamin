// styles
import './Contact.css'

import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <div className="contact-page-div">
            <ContactForm />
            <div className="maps">
                <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7530.78086779727!2d84.79132000000001!3d19.308856999999993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd714a8fe785074a!2sTEAMIN%20TECHNOLOGIES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1655673598152!5m2!1sen!2sin" width="600" height="550" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
