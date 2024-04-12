import React from 'react';
import '../../../App.css';
import './LoginSection.scss';

function LoginSection() {
    return (

        <div className='login-container'>

            <div className='login-form-container'>

                <div className='login-form-header'>
                    Login
                </div>

                <form className='form-login'>


                    <div className='small-header-wrap-login'>
                        Email
                    </div>
                    <div className='login-input-wrap'>
                        <input className='input-login' type="text" name="email" />
                    </div>

                    <div className='small-header-wrap-login'>
                        Password
                    </div>
                    <div className='login-input-wrap'>
                        <input className='input-login' type="text" name="password" />
                    </div>


                    <input className='login-button cursor-pointer' type="submit" value="Login" />
                </form>

                <div className='login-info-text'>
                    Please note: For demo login with usr: Admin and pwd: Admin
                </div>

            </div>

        </div>

    )
}

export default LoginSection