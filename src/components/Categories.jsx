import React from 'react';
import { categories } from '../data/data';

const Categories = () => {
    return (
        <div className='max-w-[1400px] mx-auto px-4 py-12'>
            <p className='text-4xl text-orange-600 text-center font-bold'>
                Top Rated Menu Items
            </p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
                {categories.map((item, index) => (
                    <div className='bg-gray-300 rounded-lg flex items-center justify-between p-3'>
                        <p className='font-bold sm:text-md md:text-lg lg:text-xl'>{item.name}</p>
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 sm:w-16 md:w-20"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories
