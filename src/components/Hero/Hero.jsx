import React from 'react'
import Image from '../../../public/images/Image1.png'
import Imag2 from '../../../public/images/Image.png'
import Image3 from '../../../public/images/Imge2.png'
import Slider from 'react-slick';
import { TbUserEdit } from 'react-icons/tb';


const ImageList = [
  {id:1,
   img: Image,
   title: "Upto 50% off on All Men's Wear",
   description:
   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nihil explicabo dolore rem quo quas veritatis! Repellat, error a unde veritatis sint quas culpa neque? Quo tenetur rem tempora ut!"
  },
  {id:2,
    img: Imag2,
    title: "Upto 50% off on All Men's Wear",
    description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nihil explicabo dolore rem quo quas veritatis! Repellat, error a unde veritatis sint quas culpa neque? Quo tenetur rem tempora ut!"
   },
   {id:3,
    img: Image3,
    title: "Upto 50% off on All Men's Wear",
    description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nihil explicabo dolore rem quo quas veritatis! Repellat, error a unde veritatis sint quas culpa neque? Quo tenetur rem tempora ut!"
   },
  
]

const Hero = () => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScrolll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
    

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center
    dark:bg-red-950 dark:text-white  duration-200'>
        {/*background pattern*/}
    <div className='h-[700px] w-[700px] bg-amber-100 absolute -top-1/2 right-0 rounded-3xl rotate-45'>

    </div>
    {/* hero section*/}
    <div className='container pb-8 sm:pb-0'>
      <Slider {...settings}>
        {ImageList.map((data) => (
          <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 px-[10px]'>
            {/*text content section*/}
            <div className='text-black flex flex-col justify-center gap-4 pt-1 sm:pt-0  text-center sm:text-left order-2 sm:order-1 relative z-10'>
              <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
              className='text-2xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
              <p 
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              
              className='text-sm '>{data.description}</p>
              <div  
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
              >
                  <button className='bg-gradient-to-r from-amber-400 to-amber-600 hover:scale-105
                  duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
              </div>
            </div>
            {/*image section*/}
            <div className='order-1 sm:order-2'>
              <div
              data-aos="zoom-in"
              data-aos-once="true"

              className='relative z-10'>
                 <img src={data.img} alt="" className='w-[300px] h-[300px] sm:h-[400px] sm:w-[400px] sm:scale-125 lg:scale-120 object-contain mx-auto'/> 
              </div>
            </div>
          </div>
        </div>
        ))}
      
      </Slider>

      
    </div>
    </div>
  )
}

export default Hero
