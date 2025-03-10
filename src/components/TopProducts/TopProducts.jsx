import React from 'react'
import Image11 from '../../../public/images/women/11.png'
import Image12 from '../../../public/images/women/22.png'
import Image13 from '../../../public/images/women/33.png'
import { FaStar } from "react-icons/fa";



const ProductsData =[

    {
        id:1,
        img: Image13,
        title: 'Casual Wear',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta maxime repellendus culpa voluptatem, accusantium ex reiciendis commodi quam? Fugit, corrupti'
       
    },
    
    {
        id:2,
        img: Image12,
        title: 'Casual Wear',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta maxime repellendus culpa voluptatem, accusantium ex reiciendis commodi quam? Fugit, corrupti'
       
    },
    
    {
        id:3,
        img: Image13,
        title: 'Casual Wear',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta maxime repellendus culpa voluptatem, accusantium ex reiciendis commodi quam? Fugit, corrupti'
       
    },
]
const TopProducts = () => {
  return (
    <div className='bg-white pb-[80px] h-[650px] flex justify-center items-center '>
      <div className="container flex flex-col gap-[40px]">
        {/*Header section*/}
         <div className='text-center mb-24'>
         <p data-aos="fade-up" className='text-sm text-amber-200'>Top Rated Products for you</p>
         <h1 data-aos="fade-up" className='text-3xl font-bold text-black'>Best Products</h1>
         <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam necessitatibus perspiciatis quo!</p>
         </div>
        {/*Body section*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 place-items-center '>
            
            {
                ProductsData.map((data) =>(
                    <div data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative 
                    shadow-xl duration-300 group max-w-[300px]'>
                         {/*image section*/}
                         <div className="h-[150px]">
                            <img src={data.img} alt=""
                            className="max-w-[140px] block mx-auto transform -mt-20 group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                          
                            />
                         </div> 
                         {/*detail section*/}
                         <div className='p-4 text-center'>
                          {/*star rating*/}
                            <div className='w-full flex items-center justify-center gap-1'>
                              <FaStar className='text-yellow-500' />
                              <FaStar className='text-yellow-500' />
                              <FaStar className='text-yellow-500' />
                              <FaStar className='text-yellow-500' />
                            </div>
                          <h1 className='text-xl font-bold'>{data.title}</h1>
                          <p className='text-sm text-gray-500 group-hover:text-white duration-300 line-clamp-2'>{data.description}</p>
                          <button 
                          className='bg-amber-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                          group-hover:text-amber-500'
                          //  onClick={handleOrderPopup}
                           >
                            Order Now
                          </button>
                         </div>
                    </div>
                )

                )
            }
        </div>
      </div>
    </div>
  )
}

export default TopProducts
