import React from 'react'
import Image from '../../../public/images/women/Store.png'
import { IoLogoInstagram } from "react-icons/io5";
import { FiFacebook, FiYoutube} from "react-icons/fi";
import { RiTiktokLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='bg-amber-100 flex justify-center items-center sm:pt-[80px] pt-[0px] sm:pb-[30px]  '>
      <div className="container text-black flex flex-col">
        {/*First section*/}
      <div className='grid grid-cols-1 sm:grid-cols-2 '>
        <div className='text-left flex flex-col  p-[40px] gap-3'>
            <h1 className='text-2xl font-bold text-amber-800'>Lorem ipsum dolor, sit </h1>
            <ul className='text-sm font-semibold text-amber-800'>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            {/*Social media icons*/}
            <div className='flex gap-3 text-3xl pt-4 text-amber-800'>
            <IoLogoInstagram className='cursor-pointer hover:scale-[1.3] transition-transform duration-300'/>
            <FiFacebook className='cursor-pointer hover:scale-[1.3] transition-transform duration-300'/>
            <FiYoutube className='cursor-pointer hover:scale-[1.3] transition-transform duration-300'/>
            <RiTiktokLine className='cursor-pointer hover:scale-[1.3] transition-transform duration-300'/>
            </div>
        </div>
       <div className='
       bg-gradient-to-r from-amber-200 to-amber-400 flex justify-center
       items-center rounded-full w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] relative'>
        <img data-aos="zoom-in" data-aos-duration="5000" className='w-[300px] h-[300px] sm:w-[350px] 
        
        sm:h-[600px] object-contain absolute b-5 z-100' src={Image} alt="" />
       </div>
      </div>
      {/*Second section*/}
      <div className='flex justify-center mt-4 pt-5 border-t-1 border-amber-600'>
        &copy; 2023 All rights reserved
      </div>
      </div>
    </div>
  )
}

export default Footer
