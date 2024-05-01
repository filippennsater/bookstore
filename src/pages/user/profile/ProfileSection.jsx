import React from 'react';
import '../../../App.css';
import './ProfileSection.scss';

import { useState, useEffect } from 'react';
import { auth } from '../../../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from "react-router-dom";

import {doc, getDoc} from 'firebase/firestore';
import { db } from '../../../firebase.js';


function ProfileSection() {
    const [user, setUser] = useState({});
    //userData is set by fetching the localstorage array, which is filled with data in "getUserData"
    const [userData, setUserData] = useState(() => {
        const storedData = localStorage.getItem('userData');
        return storedData ? JSON.parse(storedData) : {};
    });

    //To get the user currently logged in
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, [user]);

    //to get the data from the current user uid
    useEffect(() => {
        if (user && user.uid) {
            getUserData(user.uid);
        }
    }, [user]);

    async function getUserData(uid) {
        const userDocRef = doc(db, "users", uid);
        try {
            const userDocSnapshot = await getDoc(userDocRef);
            if (userDocSnapshot.exists()) {
                const data = userDocSnapshot.data();
                setUserData(data);
                //have to user json.stringify to convert the data to strings
                localStorage.setItem('userData', JSON.stringify(data));
            } else {
                console.log('No such data!');
            }
        } catch (error) {
            console.error('Error getting user data:', error);
        }
    };


    return (

        <div className='profile-container'>

            {!user ? <Navigate to="/login" /> : null}

            <div className='profile-info-container'>

                <div className='profile-left-container'>

                    <div className='profile-picture-container'>

                    </div>

                    <div className='profile-name-container'>
                        {user ? userData.name : "---"}
                    </div>

                </div>

                <div className='profile-right-container'>

                    <div className='profile-info-head-container'>
                        Phonenumber
                    </div>
                    <div className='profile-info-text-container'>
                        {user ? userData.phone : "---"}
                    </div>

                    <div className='profile-info-head-container'>
                        Email
                    </div>
                    <div className='profile-info-text-container'>
                        {user ? userData.email : "---"}
                    </div>

                    <div className='profile-info-head-container'>
                        Adress
                    </div>
                    <div className='profile-info-text-container'>
                        {user ? userData.adress : "---"}
                    </div>



                    <div className='settings-container'>
                        Change password or account info:&nbsp;&nbsp;
                        <div className='settings-wheel-container'>
                            <i className="fa-solid fa-gear"></i>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default ProfileSection