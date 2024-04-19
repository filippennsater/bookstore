import React from 'react';
import '../../../App.css';
import './LoginSection.scss';

function LoginSection() {
    return (

        <div className='login-container'>

            <div className='login-form-container'>

                <div className='login-form-header'>
                    Log in
                </div>

                <form className='form-login'>


                    <div className='small-header-wrap-login'>
                        Email
                    </div>
                    <div className='login-input-wrap'>
                        <input
                            className='input-login'
                            type="email"
                            name="email"
                        />
                    </div>

                    <div className='small-header-wrap-login'>
                        Password
                    </div>
                    <div className='login-input-wrap'>
                        <input
                            className='input-login'
                            type="password"
                            name="password"
                        />
                    </div>


                    <input className='login-button cursor-pointer' type="submit" value="Log in" />
                </form>

                <div className='login-info-text'>
                    Please note: For demo login with usr: test@gmail.com and pwd: test123
                </div>

            </div>

        </div>

    )
}

export default LoginSection