import React, { useState} from 'react'
import Image from '../../../public/images/pngaaa.com-925422.png'
import Imag2 from '../../../public/images/women/1.png'
import Imag3 from '../../../public/images/women/11.png'
import Imag4 from '../../../public/images/women/2.png'
import Imag5 from '../../../public/images/women/22.png'
import Imag6 from '../../../public/images/women/3.png'
import Imag7 from '../../../public/images/women/33.png'
import Imag8 from '../../../public/images/women/4.png'
import Imag9 from '../../../public/images/women/iim.png'
import { FaStar } from "react-icons/fa";

const DataBaner =[
    {
        id: 1,
        name:"Fab",
        Phone:"0780720718",
        img:Image
    },
    {
        id: 1,
        name:"FT",
        Phone:"0780720718",
        img:Imag2
    },
    {
        id: 1,
        name:"Niyo",
        Phone:"0780720718",
        img:Image
    },
];
const Banner = () => {

const imagex =[Image,Imag3, Imag4, Imag5, Imag6, Imag7, Imag8, Imag2, Imag2];
const [index, setIndex] = useState(0);
const changeImage = ()=> {
setIndex((prevIndex) => (prevIndex + 1) % imagex.length);
};

  return (
    <div className='flex justify-center items-center sm:py-[80px] py-[30px] px-[20px]'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className='flex flex-col justify-center items-center relative w-[100%]'>
             <img className=' sm:w-[550px] sm:h-[600px] w-[100%] h-[400px] sm:object-cover object-contain'  data-aos ="zoom-in" data-aos-duration="400" src={imagex[index]} alt="" />
             <button data-aos="zoom-out"
             onClick={changeImage}
             className=' bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%
              h-[70px] w-[70px]  rounded-full absolute z-1 cursor-pointer shadow-2xl'>Click Me</button>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellat accusamus
                 veritatis minus illum. Vitae est repellendus magni.</p>
                 <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 mt-5'>
                    {
                        DataBaner.map((data) =>(
                           <div className='border border-amber-100 rounded-2xl p-[10px]'>
                             <img data-aos="zoom-out"
                                  data-aos-duration="400"
                                  data-aos-delay="100"
                             src={data.img} alt="" />
                             <h1>{data.name}</h1>
                             <p>{data.Phone}</p>
                             <div className='flex gap-[5px] text-yellow-300 text-sm'>
                             <FaStar />
                             <FaStar />
                             </div>
                             <button className='
                             duration-200
                             bg-gradient-to-r from-amber-300 to-amber-900 hover:scale-500 py-1 my-3 px-5 rounded-full'>Click</button>
                           </div>
                            
                        )
                        )
                    }

                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
