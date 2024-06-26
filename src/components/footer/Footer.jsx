import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';




function Footer() {

    return (


        <div className='footer-container'>


            <div className='footer-links'>
                <div className='footer-link-wrapper'>

                    <div className='footer-link-items'>
                        <h2>About Me</h2>
                        <div className='p3'>Filip Pennsäter</div>
                        <div className='p3'>Sweden, Skåne, Lund</div>
                        <div className='p3'>Junior developer</div>
                    </div>

                    <div className='footer-link-items'>
                        <h2>Contact</h2>
                        <div className='p3'>0700907172</div>
                        <div className='p3'>filip.pennsater@gmail.com</div>
                    </div>

                </div>

                <div className='footer-link-wrapper'>

                    <div className='footer-link-items'>
                        <h2>Rights</h2>
                        <Link to='https://opensource-7d53e.web.app' target='_blank'>Open source</Link>
                        <Link to='https://mediainformation-ca3b9.web.app' target='_blank'>AI created media</Link>
                        <Link to='https://userinformation-76154.web.app' target='_blank'>ToS and PP</Link>
                    </div>

                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='https://www.linkedin.com/in/filip-penns%C3%A4ter-922508171/' target='_blank'>LinkedIn</Link>
                        <Link to='https://github.com/filippennsater' target='_blank'>GitHub</Link>
                        <Link to='https://www.instagram.com/filippdev/' target='_blank'>Instagram</Link>
                    </div>

                </div>
            </div>




            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='footer-logo' />
                    </div>
                    <small className='website-rights'>© 2023</small>
                    <div className='social-icons'>

                        <Link
                            className='social-icon-link linkedin'
                            to='https://www.linkedin.com/in/filip-penns%C3%A4ter-922508171/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>

                        <Link
                            className='social-icon-link github'
                            to='https://github.com/filippennsater'
                            target='_blank'
                            aria-label='Github'
                        >
                            <i className='fab fa-github' />
                        </Link>

                        <Link
                            className='social-icon-link instagram'
                            to='https://www.instagram.com/filippdev/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>

                    </div>
                </div>
            </section>



        </div>
    );

}

export default Footer;