import React from 'react';
import HeadingCardValue from './HeadingCardValue';
import { cardData } from '../data/data';

const HeadingCards = () => {
    return (
        <div className='max-w-[1400px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-3'>
            {cardData.map((item) => (
                <HeadingCardValue
                    key={item.id}
                    name1={item.name1}
                    name2={item.name2}
                    img={item.img}
                />

            ))}
        </div>
    )
}

export default HeadingCards;