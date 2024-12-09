import Image from 'next/image';
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Featuer = () => {
    const image = [
        
        
        "/ipaidpro.jpg",
        
      "/wpics.jpg",
       
       
      "/apple.jpg",

      "/ipaidplus.jpg",

      "/watch.jpg",
      "/pink.jpg",
    ];

    return(
<div className="relative text-center p-10">

    <div className='absolute inset-0' style={{
        backgroundImage:"/bg.jpg",
        backgroundSize:'cover',
        backgroundPosition: 'center',
        zIndex:0,
        opacity:0.2,
    
    }}/>

   <h1 className='font-bold text-4xl mb-4 text-white z-10 relative'>Most Requested Item </h1>
   <h1 className='text-2xl text-white z-10 relative'>Order Now...</h1>

<section id='Projectimage' className='w-fit mx-auto grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5'>

{Array.from({length:6}).map((_ , index) => (
    <div key={index}
    className='w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative'> 
<a href="#">
    <Image
    src={image[index]}
    alt={`Burger ${index}`}
    width={700}
    height={700}
    className='h-80 w-72 object-cover rounded-t-xl '/>
</a>


<div className='px-4 py-3 w-72'>
<span className='text-slate-500 mr-3 uppercase text-xs'>Category</span>
<p className='text-lg font-extrabold text-red-600 truncate block capitalize'>i Phone {index +1}</p>

<div className='flex items-center '>
    <p className='text-lg font-semibold text-black my-3 cursor-auto'>$1490</p>


<del>
<br />
<p className='text-sm text-blue-800 cursor-auto ml-2 '>{""}$1990</p>
</del>


<div className='ml-auto'>
<FaShoppingCart className='h-5 w-5 text-blue-800 ' />
</div>

</div>


</div>

    </div>
))}

</section>
        
    </div>


    )

}


export default Featuer;