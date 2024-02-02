import React from 'react';
import { Link } from 'react-router-dom';
import './Shares.scss';

function Shares(props) {
    return (
        <>
            <li className='share'>

                <Link className='share__link' to={props.path} target="_blank">
                    <figure className='share__pic-wrap' data-category={props.label}>
                        <img
                            src={props.src}
                            alt='ProjectImage'
                            className='share__img'
                        />
                    </figure>
                    <div className='share__info'>
                        <h10 className='share__text1'>
                            {props.text}
                        </h10>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default Shares;