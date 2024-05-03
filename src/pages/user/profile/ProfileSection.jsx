import React from 'react';
import '../../../App.css';
import './ProfileSection.scss';

import { useState, useEffect } from 'react';
import { auth } from '../../../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from "react-router-dom";

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase.js';

import { storage } from '../../../firebase.js';
import { ref, getDownloadURL } from "firebase/storage";

function ProfileSection() {
    const [user, setUser] = useState({});
    //userData is set by fetching the localstorage array, which is filled with data in "getUserData"
    const [userData, setUserData] = useState(() => {
        const storedData = localStorage.getItem('userData');
        return storedData ? JSON.parse(storedData) : {};
    });

    const [profileImageUrl, setProfileImageUrl] = useState('');
    

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
            getProfileImage(user.uid);
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

    


    async function getProfileImage(uid) {
        const imageRef = ref(storage, `${uid}.jpg`);
        try {
            const url = await getDownloadURL(imageRef);
            console.log(url);
            setProfileImageUrl(url);
            // Save the image URL to local storage
            localStorage.setItem(`${uid}_profileImage`, url);
            console.log(localStorage.getItem(`${uid}_profileImage`));
        } catch (error) {
            console.error('Error getting profile image:', error);
        }
    }

    return (

        <div className='profile-container'>

            {!user ? <Navigate to="/login" /> : null}

            <div className='profile-info-container'>

                <div className='profile-left-container'>

                    <div className='profile-picture-container'>
                    {profileImageUrl &&
                        <img
                        src={profileImageUrl}
                        alt="Profile"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    }

                    </div>

                    <div className='profile-name-container'>
                        {userData.name || "---"}
                    </div>

                </div>

                <div className='profile-right-container'>

                    <div className='profile-info-head-container'>
                        Phonenumber
                    </div>
                    <div className='profile-info-text-container'>
                        {userData.phone || "---"}
                    </div>

                    <div className='profile-info-head-container'>
                        Email
                    </div>
                    <div className='profile-info-text-container'>
                        {userData.email || "---"}
                    </div>

                    <div className='profile-info-head-container'>
                        Adress
                    </div>
                    <div className='profile-info-text-container'>
                        {userData.adress || "---"}
                    </div>

                    {/*
                    Before I used this code: 
                    userData.adress ? userData.adress : "---"
                    If userData.adress exists, then I use that value as input, otherwize I use "---"
                    But using the || is better
                    */}


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