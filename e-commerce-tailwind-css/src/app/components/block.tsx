import Image from "next/image";
import React from "react";
import { CiMobile2 } from "react-icons/ci";
export default function Block() {
  return (
    <section className=" text-white container mx-auto  py-10 flex flex-col  md:flex-row items-center  ">
      <div className="md:w-1/2 md:pr-10 ">
        <h2 className="text-3xl  font-bold mb-4 text-yellow-500">
          Iphone latest Model{" "}
        </h2>
        <p className="text-white mb-4">
        Find the latest Smartphones at Unbeatable Prices! Explore
         Top Brands, Secure Checkout, and fast Delivery—your Perfect Mobile is Just a Click Away on Below Button
        </p>
        <button className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-700 transition duration-200">
          {" "}
          Order Now
        </button>

        <h3 className="text-2xl font-bold mt-6 mb-2 text-center text-yellow-500 text-center">
          Coming Soon : Our New IPhone launched
        </h3>


        <ul className="text-white ">
            <li className="flex"><strong>Top Brands</strong>Choose from the latest Smartphones By Leading Brands.<CiMobile2 /> </li>
            <li className="flex"><strong>Competitive Price</strong>Enjoy Exclusive Deals and Prices you Won’t find Elsewhere.<CiMobile2 /> </li>
            <li className="flex"><strong> Quality Accessories</strong>Browse a Range of Premium Accessories for All Devices<CiMobile2 /> </li>
            <li className=""><strong>Secure Checkout</strong>Shop confidently with our secure and hassle-free checkout process.<CiMobile2/>  </li>
            <li className="flex"><strong>Fast Delivery</strong>Get your products quickly with our fast, reliable shipping.</li>
        </ul>
      </div>
        <div className="md:w-1/2  mt-6 md:mt-0">
        <Image 
        src="/mob.jpg"
        alt="card"
        width={700}
        height={700}
        className=" h-[450px] rounded-lg shadow-lg transition-transform transform duration-500 ease-in-out hover:scale-105 mr-7 "/>
        
</div>
    </section>
  );
}