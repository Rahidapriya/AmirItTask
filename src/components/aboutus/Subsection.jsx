import React from 'react';
import { FaFolderOpen } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { PiNotePencilBold } from "react-icons/pi";
// import './subsection.css'
const Subsection = () => {
    return (
        <div className='w-8/12 mx-auto text-center my-28 '>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center font-[20px] gap-10 text-black'>
           <div className='flex flex-col items-center justify-center'>
           <FaFolderOpen className='bg-pink-500 mb-5 hover:bg-white hover:text-black hover:border-4 transition duration-300  hover:border-pink-500  text-white h-28 w-28  p-9 rounded-full '></FaFolderOpen>
            <p className='text-[20px] font-semibold'>World leader in consulting and finance</p>
           </div>
           <div className='flex flex-col items-center justify-center'>
           <FaCode className='bg-purple-500 mb-5 h-28 w-28 text-white  p-9 rounded-full hover:bg-white hover:text-black hover:border-4 transition duration-300  hover:border-purple-500  '></FaCode>
            <p className='text-[20px] font-semibold'>A focused team with a specialized skill</p>
           </div>
           <div className='flex flex-col items-center justify-center'>
           <IoSettingsSharp className='bg-blue-800 mb-5 h-28 w-28 text-white  p-9 rounded-full hover:bg-white hover:text-black hover:border-4 transition duration-300  hover:border-blue-800  '></IoSettingsSharp>
            <p className='text-[20px] font-semibold'>Trusted and professional advisors for you</p>
           </div>
            <div className='flex flex-col items-center justify-center'>
            <PiNotePencilBold className='bg-gray-800 mb-5 h-28 w-28 text-white  p-9 rounded-full hover:bg-white hover:text-black hover:border-4 transition duration-300  hover:border-gray-800'></PiNotePencilBold>
            <p className='text-[20px] font-semibold'>Experience to give you a better results</p>
            </div>
            </div> 
        </div>
    );
};

export default Subsection;