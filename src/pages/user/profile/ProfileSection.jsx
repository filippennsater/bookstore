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

                    <div className='profile-phone-container'>
                        0000-000000
                    </div>

                    <div className='profile-email-container'>
                        madeup@gmail.com
                    </div>

                </div>

            </div>

        </div>

    )
}

export default ProfileSection