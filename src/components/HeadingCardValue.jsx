import React from 'react'

const HeadingCardValue = ({ name1, name2, img }) => {
    return (
        <>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='text-3xl font-bold px-3 pt-4'>
                        {name1}
                    </p>
                    <p className='px-3'>{name2}</p>
                    <button
                        className='border-white bg-white text-black mx-3 absolute bottom-6'>
                        Order Now
                    </button>
                </div>

                <img
                    src={img}
                    alt=""
                    className='max-h-[170px] md:max-h-[200px] w-full object-cover rounded-xl'
                />
            </div>
        </>
    )
}

export default HeadingCardValue
