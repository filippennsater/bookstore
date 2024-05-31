import React from 'react';
import '../../App.css';
import './HomeTransitionSection.scss';
import BigCard from '../../components/BigCard/BigCard';
import BigCardProp from '../../components/BigCard/BigCardProp';
import '../../components/BigCard/BigCard.scss';


import { connect } from 'react-redux';

const HomeTransitionSection = ({ products }) => {


    return (

        <div className='transition-container'>

            <div className='big-cards-container'>

                {products.slice(12, 13).map((item) => (
                    <BigCard key={item.id} item={item} />
                ))}

                <BigCardProp
                    src='images/PCW2023.jpg'
                    header="Poetry contest winner 2023"
                    text='Elsa Vinterdal, with her beautiful sonnet "Shadows of Euphoria" enchanted the judges and clinched the first place. In second place followed Viktor Månsdotter with his gripping poetry cycle "Hovering Melancholy", while the profound Nils Björnsson took third place with his lyrical ode "The Day That Sings". A heartfelt congratulations to all three for their impressive contributions to the art of poetry! Click to enter the contest of 2024!'
                    path='/contact'
                />

            </div>

        </div>

    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(HomeTransitionSection);