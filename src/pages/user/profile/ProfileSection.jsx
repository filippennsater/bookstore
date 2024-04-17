import React from 'react';
import '../../../App.css';
import './ProfileSection.scss';

function ProfileSection() {
    return (

        <div className='profile-container'>

            <div className='profile-info-container'>

                <div className='profile-left-container'>

                    <div className='profile-picture-container'>

                    </div>

                    <div className='profile-name-container'>
                        Test Testname
                    </div>

                </div>

                <div className='profile-right-container'>

                    <div className='profile-info-head-container'>
                        Phonenumber
                    </div>
                    <div className='profile-info-text-container'>
                        0000-000000
                    </div>

                    <div className='profile-info-head-container'>
                        Email
                    </div>
                    <div className='profile-info-text-container'>
                        madeup@gmail.com
                    </div>

                    <div className='profile-info-head-container'>
                        Adress
                    </div>
                    <div className='profile-info-text-container'>
                        Madeupstreet 0, 223 57 Lund
                    </div>



                    <div className='settings-container'>
                        Change password or account info:&nbsp;&nbsp;
                        <div className='settings-wheel-container'>
                            <i class="fa-solid fa-gear"></i>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default ProfileSection