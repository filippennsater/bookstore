import React from 'react';
import '../../App.css';
import './SuggestionSection.scss';

function SuggestionSection() {
    return (

        <div className='suggestion-container'>

            <div className='suggestion-form-container'>

                <div className='suggestion-form-header'>
                    Product suggestion form
                </div>

                <div className='form-suggestion'>


                    <div className='small-header-wrap-suggestion'>
                        What product would you like to see in our store
                    </div>
                    <div className='suggestion-input-wrap'>
                        <input
                            className='input-suggestion'
                            type="text"
                            name="text"
                        />
                    </div>

                    <div className='small-header-wrap-suggestion'>
                        Please give us a motivation
                    </div>
                    <div className='suggestion-input-wrap'>
                        <textarea
                            className='input-suggestion2'
                            type="message"
                            name="message"
                        />
                    </div>


                    <input className='suggestion-button cursor-pointer' type="submit" value="Send"/>
                </div>

                <div className='suggestion-info-text'>
                    Please note: The form is not functional, this is only a demo!
                </div>

            </div>

        </div>

    )
}

export default SuggestionSection