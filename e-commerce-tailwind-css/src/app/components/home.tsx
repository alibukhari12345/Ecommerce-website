import Image from "next/image";
import React from "react";


export default function Home() {
  return (
    <div>
      <section className="">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg-px-6">
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full ">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  src="/iphone12.jpg"
                  alt="Mobile one"
                  width={700}
                  height={700}
                />

                <div className="absolute insert-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
                <h3 className="justify-end z-10 text-2xl font-bold text-white  absolute   top-0 left-0 p-4  xs:text-xl md:text-2xl">
                I Phone 12pro Max
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 ">
              <a
                className="group relative flex flex-col  overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 "
                href=""
              >
                <Image
                  src="/iphone13.jpg"
                  alt="Mobile two"
                  width={700}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={700}
                />

                <div className="absolute insert-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>

                <h3 className="z-10 text-lg font-medium text-white absolute  top-0 left-0 p-4  xs:text-xl md:text-2xl">
                I Phone 13pro Max
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2  ">
                <a
                className="group relative flex flex-col  overflow-hidden rounded-lg px-4 pb-4 pt-40 "
                href=""
              >
                <Image
                  src="/iphone14.jpg"
                  alt="Mobile three"
                  width={700}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={700}
                />

                <div className="absolute insert-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>

                <h3 className="z-10 text-lg font-medium text-white absolute  top-0 left-0 p-4  xs:text-xl md:text-2xl">
                I Phone 14pro Max
                </h3>
              </a>


              <a
                className="group relative flex flex-col  overflow-hidden rounded-lg px-4 pb-4 pt-40  "
                href=""
              >
                <Image
                  src="/iphone15.jpg"
                  alt="mobile four"
                  width={700}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={700}
                />

                <div className="absolute insert-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>

                <h3 className="z-10 text-lg font-medium text-white absolute  top-0 left-0 p-4  xs:text-xl md:text-2xl">
                I Phone 15pro Max
                </h3>
              </a>
                
              </div>
            </div>


  <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r form-black to-grey-700 h-auto md:h-full flex flex-col ">

<a href=""
className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow ">




                
<Image src="/iphone16.jpg"

alt="Mobile five"
width={700}
className="absolute inset-0  w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"


height={700}
/>

<div className="absolute insert-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>

<h3 className="z-10 text-lg font-medium text-white absolute  top-0 left-0 p-4  xs:text-xl md:text-2xl">
I Phone 16pro Max
</h3>
</a>





  </div>
 





          </div>
        </div>
      </section>
    </div>
)}