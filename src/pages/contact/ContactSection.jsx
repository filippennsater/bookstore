import React from 'react';
import '../../App.css';
import './ContactSection.scss';

function ContactSection() {

    return (

        <div className='contact-container'>

            <div className='contact-info-wrap'>

                <div className='left-container'>

                    <div className='logo-black-container' />

                </div>
                <div className='right-container'>

                    <h30>
                        Phone
                    </h30>

                    <p30>
                        000-XXX XX XX<br />
                        Our phone hours are between 9:00 AM and 5:00 PM, Monday through Friday.
                    </p30>



                    <h30>
                        Adress
                    </h30>

                    <p30>
                        PHILIP & PEN<br />
                        Make-Believe Lane 00<br />
                        000 00 LUND
                    </p30>



                    <h30>
                        Socials
                    </h30>

                    <p30>
                        Follow us on our <a href="https://www.instagram.com/kira.and.minou/" target="blank">social media!</a>
                    </p30>



                    <h30>
                        Poetry competition 2024!
                    </h30>

                    <p30>
                        Here, you can submit your entries for our poetry competition.<br />By participating, you agree that we reserve the right to publish your texts on our website.
                    </p30>

                    <form>
                        <label>
                            Name:<br />
                            <input type="text" name="name" /><br />
                        </label>
                        <label>
                            Email:<br />
                            <input type="text" name="name" /><br />
                        </label>
                        <label>
                            Phonenumber:<br />
                            <input type="text" name="name" /><br /><br />
                        </label>
                        
                        <input type="file" />
                        <input type="submit" value="Submit" />
                    </form>

                </div>

            </div>

        </div>

    )
}

export default ContactSection