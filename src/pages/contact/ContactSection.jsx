import React, { useState } from 'react';
import '../../App.css';
import './ContactSection.scss';

function ContactSection() {

    const [showRedText, setShowRedText] = useState(false);

    const handleSettingsClick = () => {
        setShowRedText(true);
        setTimeout(() => {
            setShowRedText(false);
        }, 3000);
    };

    return (

        <div className='contact-container'>

            <div className='contact-info-wrap'>

                <div className='left-container'>

                    <div className='logo-black-container' />

                </div>
                <div className='right-container'>

                    <div className='h30'>
                    <br />Phone
                    </div>

                    <div className='p30'>
                        000-000 00 00<br />
                        Our phone hours are between 9:00 AM and 5:00 PM, Monday through Friday.
                    </div>



                    <div className='h30'>
                        Adress
                    </div>

                    <div className='p30'>
                        PHILIP & PEN<br />
                        Make-Believe Lane 00<br />
                        000 00 LUND
                    </div>



                    <div className='h30'>
                        Socials
                    </div>

                    <div className='p30'>
                        Follow us on our <a href="https://www.instagram.com/filippdev/" target="blank">social media!</a>
                    </div>



                    <div className='h30'>
                        Poetry competition 2024!
                    </div>

                    <div className='p30'>
                        Here, you can submit your entries for our poetry competition.<br />By participating, you agree that we reserve the right to publish your texts on our website.<br /><br />
                    </div>

                    <form>
                        <label>
                            Name<br />
                            <input className='input-competition' type="text" name="name" /><br />
                        </label>
                        <label>
                            Email<br />
                            <input className='input-competition' type="text" name="name" /><br />
                        </label>
                        <label>
                            Phonenumber<br />
                            <input className='input-competition' type="text" name="name" /><br /><br />
                        </label>
                        
                        <input type="file" />
                        <input type="submit" value="Submit" onClick={handleSettingsClick}/>
                    </form>

                    <div className='redTextContact-container'>
                        {showRedText && <div className="redTextContact">This is only a demo</div>}
                    </div>

                </div>

            </div>

        </div>

    )
}

export default ContactSection