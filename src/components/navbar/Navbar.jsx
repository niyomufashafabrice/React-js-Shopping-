import React, {useState} from 'react'
import Logo from '../../../public/images/logo2.png'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Menuu = [
  { id:1, name:"Home", link:"/#" }, 
  { id:2, name:"Top Rated", link:"/#" },
  { id:3, name:"Kids Wear", link:"/#" },
  { id:4, name:"Mens Wear", link:"/#"},
  {id:5, name:"Electronics", link:"/#"}, 
];
const DropdownLinks =[
  { id:1, name:"Trending Products", link:"/#",},
  { id:2, name:"Best selling", link:"/#",},
  { id:3, name:"Top Rated", link:"/#"},
];

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className='shadow-md bg-white dark:bg-black dark:text-white duration-200 relative z-40'>

      {/*Uper navbar*/}
      <div className='bg-amber-300 py-2 flex justify-center  px-[10px] sm:px-0'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2 '>
              <img src={Logo} alt="" className='w-10 uppercase' />
              Shopsy
            </a>
          </div>

          {/*searchbarnand order button*/}
          <div className='flex justify-between items-center gap-4'>
            <div className='group relative hidden sm:block'>
              <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all 
              duration-300 rounded-full border border-white px-[18px] py-1 focus:outline-none focus:border-1 focus:border-amber-400
              bg-white text-black' />
              <IoMdSearch className='text-gray-500 group-hover:text-amber-400 absolute top-1/3
              -translate-y-1/2 right-3 ' />
            </div>

            {/* order button*/}
          <button onClick={() => alert("Ordering not available yet")}
            className='bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-200 text-white py-1 px-4
             rounded-full flex items-center gap-3 group'>
            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
          </button>

          {/*Dark mode switch */}
          <div>
            <DarkMode />
          </div>
          </div>
          
        </div>
      </div>
      {/*Lower Navbar*/}
      <div className='text-black flex justify-end sm:justify-center px-[10px] sm:px-0'>

      {/* Toggle Button (Mobile) */}
      <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />} {/* Icon changes */}
        </button>

        <ul 
        className= {`${
          isOpen ? "flex flex-col" : "hidden"
        } sm:flex items-center gap-4 absolute sm:static left-0 top-full bg-white sm:bg-transparent w-full sm:w-auto`}
        >
          {
            Menuu.map((data)=>(
              <li key={data.id}>
                <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
              </li>
            ))
          }
          {/*Drop down*/}
          <li className='group relative cursor-pointer'
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <a href="#" className='flex items-center gap-[2px] py-2'>
              Trending
              <span>
                <FaCaretDown className={`transition-all duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`} />
              </span>
            </a>
            <div className={`absolute z-[9999] w-[150px] rounded-md bg-white p-2 text-black transition-all duration-200 ${
              isDropdownOpen ? "block" : "hidden"
            }`}
            
            >
              <ul className=''>
                {DropdownLinks.map((data) =>(
                  <li key={data.id}>
                    <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-amber-400'>
                      {data.name}
                    </a>
                  </li>
              
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
