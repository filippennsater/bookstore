import React from 'react';
import '../../../App.css';
import './LoginSection.scss';
import { useState/*, useEffect*/ } from 'react';
import { auth } from '../../../firebase.js';
import { /*onAuthStateChanged, */signInWithEmailAndPassword } from 'firebase/auth';

function LoginSection() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleLogin = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    //const [user, setUser] = useState({});

    /*
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, [])
    
    Can be used with:
    <h4> {user ? user.email : "Not Logged In"} </h4>
    */

    return (

        <div className='login-container'>

            <div className='login-form-container'>

                <div className='login-form-header'>
                    Log in
                </div>

                <div className='form-login'>


                    <div className='small-header-wrap-login'>
                        Email
                    </div>
                    <div className='login-input-wrap'>
                        <input
                            onChange={(event) => {
                                setLoginEmail(event.target.value);
                            }}
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
                            onChange={(event) => {
                                setLoginPassword(event.target.value);
                            }}
                            className='input-login'
                            type="password"
                            name="password"
                        />
                    </div>


                    <input className='login-button cursor-pointer' type="submit" value="Log in" onClick={handleLogin} />
                </div>

                <div className='login-info-text'>
                    Please note: For demo login with usr: test@gmail.com and pwd: test123
                </div>


            </div>

        </div>

    )
}

export default LoginSection