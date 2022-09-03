import React, { useState } from 'react';
import { foodData } from '../data/data';

const Food = () => {

    const [food, setFood] = useState(foodData);
    console.log(foodData);

    const filterType = (category) => {
        setFood(
            foodData.filter((item) => {
                return item.category === category;
            })
        );
    };

    const filterPrice = (price) => {
        setFood(
            foodData.filter((item) => {
                return item.price === price
            })
        )
    }

    return (
        <div className='max-w-[1400px] mx-auto px-4 py-12'>
            <h1 className='text-4xl text-orange-600 text-center font-bold'>
                Our Menu Items
            </h1>

            {/* filter row */}
            <div className='pt-8 flex flex-col justify-between md:flex-row '>

                {/* filter category */}
                <div>
                    <p className='px-2 text-xl text-gray-700 font-semibold'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button
                            className='filter_button'
                            onClick={() => setFood(foodData)}>All</button>
                        <button
                            className='filter_button'
                            onClick={() => filterType('burger')}>Burger</button>
                        <button
                            className='filter_button'
                            onClick={() => filterType('pizza')}>Pizza</button>
                        <button
                            className='filter_button'
                            onClick={() => filterType('chicken')}>Chicken</button>
                        <button
                            className='filter_button'
                            onClick={() => filterType('salad')}>Salad</button>

                    </div>
                </div>

                {/* price */}
                <div>
                    <p className='px-2 text-xl text-gray-700 font-semibold'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button className='filter_button'
                            onClick={() => filterPrice("$")}>
                            ₹
                        </button>
                        <button className='filter_button'
                            onClick={() => filterPrice("$$")}>
                            ₹₹
                        </button>
                        <button className='filter_button'
                            onClick={() => filterPrice("$$$")}>
                            ₹₹₹
                        </button>
                        <button className='filter_button'
                            onClick={() => filterPrice("$$$$")}>
                            ₹₹₹₹
                        </button>
                    </div>
                </div>
            </div>
            {/* filter row end */}

            {/* Rendering FoodItems start */}
            <div className='pt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {food.map((item, index) => (
                    <div
                        key={index}
                        className="border shadow-xl hover:scale-105 duration-500"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[300px] object-cover rounded-t-lg"
                        />
                        <div className='p-2 flex justify-between'>
                            <p className='text-lg font-semibold'>{item.name}</p>
                            <p className='p-1'>
                                <span className='bg-orange-500 text-white p-2 rounded-full'>
                                    {item.price}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Rendering FoodItems end*/}
        </div>
    );
};

export default Food;
