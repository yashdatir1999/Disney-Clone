import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import playstore from "./../assets/Images/playstore.png"
import appstore from "./../assets/Images/appstore.png"
const Footer = () => {
  return (
    <div className='md:h-[40vh] w-full md:flex  md:gap-5 px-[5vmax]'>
        <div className='md:h-full md:w-[28%] w-full pt-3'>
            <ul>
                <li className='font-semibold mb-2 md:mb-5 md:mt-4 md:text-[1.4vmax]'>Company</li>
                <li className='font-semibold text-gray-400 md:mb-3 hover:text-gray-300'>About Us</li>
                <li className='font-semibold text-gray-400 mb-2 md:mb-4 md:mb-7 hover:text-gray-300'>Careers</li>
                <li className='font-semibold text-gray-400 md:mb-3'>© 2024 DATIR. All Rights Reserved. 
                <br /> Terms Of Use Privacy Policy FAQ </li>
            </ul>
        </div>
        <div className='md:h-full w- md:w-[20%] pt-3'>
            <ul>
                <li className='font-semibold md:mb-5 mb-2 md:mt-4 md:text-[1.4vmax]'>View Website in</li>
                <li className='font-semibold text-gray-400 md:mb-3 hover:text-gray-300'>✔ English</li>
            </ul>
        </div>
        <div className='md:h-full md:w-[20%] pt-3'>
            <ul>
                <li className='font-semibold md:mb-5 mb-2 md:mt-4 md:text-[1.4vmax]'>Need Help?</li>
                <li className='font-semibold text-gray-400 md:mb-3 hover:text-gray-300'>Visit Help Center</li>
                <li className='font-semibold text-gray-400 md:mb-3 hover:text-gray-300'>Share Feedback</li>
            </ul>
        </div>
        <div className='md:h-full w-full md:w-[28%] pt-3'>
            <ul className='flex flex-col md:items-end'>
                <li className='font-semibold md:mb-5 mb-2 md:mt-4 md:text-[1.4vmax]'>Connect with Us</li>
                <li className='font-semibold text-gray-400 md:md:mb-3 flex gap-5 md:mr-[6vmax] text-2xl '>< FiFacebook /> <LuTwitter /></li>
                <li className='flex gap-2 mt-4 mb-4 md:mt-10 md:h-[3.5vmax] h-10'>
                    <img className='w-[49%] ' src={playstore} />
                    <img className='w-[49%] ' src={appstore} />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer