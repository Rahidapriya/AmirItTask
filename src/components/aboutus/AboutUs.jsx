import React, { useEffect } from 'react';
import about from '../../assets/about.png'
import { TypeAnimation } from 'react-type-animation';


import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: '1000' });
  }, []);
    return (
       <div className='next-section '>
         <div className="">
            <div className="hero w-10/12  md:w-8/12 lg:w-10/12 xl:w-8/12 mx-auto  ">
  <div className="flex flex-col lg:gap-10 items-center justify-center  lg:flex-row-reverse">
    <img src={about} className="lg:w-1/2 " data-aos="fade-right" />
    <div className='mt-20 lg:w-1/2' data-aos="fade-left">
        <h3 className='text-[14px] lg:text-[20px] font-bold mb-4'>We are megaone company</h3>
      <h1 className="text-4xl font-bold">We are making 
      <TypeAnimation className='mx-2 text-4xl font-bold text-purple-700' sequence={['design','ideas',2000]} speed={300} repeat={Infinity}></TypeAnimation></h1>
    
        <h1 className='text-4xl font-bold'>better for everyone</h1>
      <p className="py-6  leading-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
      <button className="btn bg-pink-500 text-white">Learn More</button>
    </div>
  </div>
</div>
        </div>
       </div>

       
    );
};

export default AboutUs;


