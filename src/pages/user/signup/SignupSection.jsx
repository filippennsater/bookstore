import React from 'react';
import '../../../App.css';
import './SignupSection.scss';

function SignupSection() {
    return (

        <div className='signup-container'>

            <div className='signup-form-container'>

                <div className='profile-form-header'>
                    Signup
                </div>

                <form>
                    <label>
                        Name<br />
                        <input className='input-signup' type="text" name="name" /><br />
                    </label>
                    <label>
                        Email<br />
                        <input className='input-signup' type="text" name="name" /><br />
                    </label>
                    <label>
                        Password<br />
                        <input className='input-signup' type="text" name="name" /><br /><br />
                    </label>

                    <input type="submit" value="Signup" />
                </form>

            </div>

        </div>

    )
}

export default SignupSection