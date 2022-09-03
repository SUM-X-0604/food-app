import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdOutlineAccountBalanceWallet, MdHelp } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa'
import { motion } from 'framer-motion';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    return (
        <div className='max-w-[1400px] mx-auto flex justify-between items-center p-4'>
            {/* left Side */}
            <div className='flex items-center'>
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    className='cursor-pointer'>
                    <AiOutlineMenu size={20}
                        onClick={() => setNav(!nav)}
                    />
                </motion.div>
                {/* Logo */}
                <h1 className='px-2 text-xl sm:text-3xl lg:text-3xl'>Fast
                    <span className=
                        'font-bold px-1'>Food</span>
                </h1>
                <div className='hidden md:flex justify-center items-center  bg-gray-200 rounded-full p-1 
                text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-1'>Pickup</p>
                </div>
            </div>
            {/* left Side end*/}

            {/* search Field */}
            <div
                className='flex items-center w-[200px] sm:w-[400px] lg:w-[500px] cursor-pointer px-2 bg-gray-200 rounded-full'>
                <AiOutlineSearch size={20} />
                <input
                    type="text"
                    placeholder='search food'
                    className='focus:outline-none bg-transparent w-full p-2 '
                />
            </div>
            {/* search Field end */}

            {/* Cart start */}
            <motion.button
                whileTap={{ scale: 0.9 }}
                className='hidden md:flex items-center bg-black text-white py-2 rounded-full'>
                <BsFillCartFill
                    size={20}
                    className="mr-2" />
                Cart
            </motion.button>
            {/* Cart end */}

            {/* Mobile View End */}
            {/* Overlay state */}
            {nav ? <div className='bg-black/80 
            w-full h-screen top-0 z-10 left-0 fixed'>
            </div> : ""}
            {/* Overlay state end*/}

            {/* Side menu drawer start */}
            <div className={nav ? 'bg-white w-[300px] h-screen top-0 left-0 fixed z-10 duration-300' : 'bg-white w-[300px] h-screen top-0 left-[-100%] fixed z-10 duration-300'}>
                <AiOutlineClose
                    size={25}
                    className="top-[22px] right-4 absolute cursor-pointer"
                    onClick={() => setNav(!nav)}
                />
                <h1
                    className='text-2xl p-4'>
                    Fast
                    <span
                        className='font-bold px-1'>
                        Food
                    </span>
                </h1>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='flex text-xl py-4 cursor-pointer'>
                            <TbTruckDelivery
                                size={25} className="mr-4"
                            /> Orders
                        </li>
                        <li className='flex text-xl py-4 cursor-pointer'>
                            <MdFavorite
                                size={25} className="mr-4"
                            /> Favorites
                        </li>
                        <li className='flex text-xl py-4 cursor-pointer'>
                            <MdOutlineAccountBalanceWallet
                                size={25} className="mr-4"
                            /> Wallet
                        </li>
                        <li className='flex text-xl py-4 cursor-pointer'>
                            <BsSaveFill
                                size={25} className="mr-4"
                            /> Best Ones
                        </li>
                        <li className='flex text-xl py-4 cursor-pointer'>
                            <AiFillTag
                                size={25} className="mr-4"
                            /> Promotions
                        </li>
                        <li className='flex text-xl py-4 cursor-pointer'>
                            <MdHelp
                                size={25} className="mr-4"
                            /> Help
                        </li>
                        <li className='flex text-xl py-4 cursor-pointer'>
                            <FaUserFriends
                                size={25} className="mr-4"
                            /> Invite Friends
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Side menu drawer end */}


            {/* Mobile View End */}


        </div >
    )
}

export default NavBar