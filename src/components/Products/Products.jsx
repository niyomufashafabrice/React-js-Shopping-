import React from 'react'
import Image from '../../../public/images/women/1.png'
import Image1 from '../../../public/images/women/2.png'
import Imge2 from '../../../public/images/women/3.png'
import Imge3 from '../../../public/images/women/4.png'
import Imge4 from '../../../public/images/women/5.png'
import { FaStar } from "react-icons/fa";

const ProductsData = [
{
    id: 1,
    img: Image,
    title: "Women Ethnic",
    rating: 5.0,
    author: 'White',
    aosDelay: "0"
},
{
    id: 2,
    img: Image1,
    title: "Women Western",
    rating: 4.5,
    author: 'Red',
    aosDelay: "200"
},
{
    id: 3,
    img: Imge2,
    title: "Goggles",
    rating: 4.7,
    author: 'brown',
    aosDelay: "400"
},
{
    id: 4,
    img: Imge3,
    title: "Printed T-Shirt",
    rating: 4.4,
    author: 'yellow',
    aosDelay: "600"
},
{
    id: 5,
    img: Imge4,
    title: "Fashion T-Shirt",
    rating: 4.5,
    author: 'Pink',
    aosDelay: "800"
},
];
const Products = () => {
  return (
    <div className='bg-white sm:pt-[80px] pt-[0px] pb-[0px] sm:pb-[0px] px-[10px] sm:px-0'>
     <div className='py-10'>
      {/*Header section*/}
      <div className='text-center mb-10 max-w-[600px] mx-auto'>
        <p data-aos="fade-up" className='text-sm text-amber-200'>Top Selling Products for you</p>
        <h1 data-aos="fade-up" className='text-3xl font-bold text-black'>Products</h1>
        <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam necessitatibus perspiciatis quo!</p>
      </div>
      {/*Body section*/}
      <div className='sm:px-[80px] px-[10px]'>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:grid-cols-4  place-items-center'>

             {/*Card section*/}
             {ProductsData.map((data) => (
                 <div
                 
                 data-aos="fade-up"
                 data-aos-delay={data.aosDelay} 
                 key={data.id} className='space-y-3 border border-amber-100 w-[100%] p-[10px]'>
                    <img src={data.img} alt="" className='h-[200px] w-[100%] object-contain rounded-md' />
                    <div>
                        <h3 className='font-semibold text-black'>{data.title}</h3>
                        <p className='text-sm text-gray-600'>{data.author}</p>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-yellow-400'/>
                            <span className='text-black'>{data.rating}</span>
                        </div>
                    </div>
                 </div>

             ))

             }
       
        </div>
      </div>
     </div>
    </div>
  )
}

export default Products
