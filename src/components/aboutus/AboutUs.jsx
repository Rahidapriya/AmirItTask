import React, { useEffect } from 'react';
import about from '../../assets/about.png'
import { TypeAnimation } from 'react-type-animation';
// import './aboutus.js'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: '1000' });
  }, []);
    return (
        <div className=' ' id='aboutus'>
            <div className="hero  w-8/12 mx-auto next-section ">
  <div className="flex flex-col lg:gap-10  lg:flex-row-reverse">
    <img src={about} className="max-w-sm rounded-lg flex-1" data-aos="fade-right" />
    <div className='' data-aos="fade-left">
        <h3 className='text-[20px] font-bold mb-4'>We are megaone company</h3>
      <h1 className="text-4xl font-bold">We are making 
      <TypeAnimation className='mx-2 text-4xl font-bold text-purple-700' sequence={['design','ideas',2000]} speed={300} repeat={Infinity}></TypeAnimation></h1>
    
        <h1 className='text-4xl font-bold'>better for everyone</h1>
      <p className="py-6  leading-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
      <button className="btn bg-[#FE0300] text-white">Learn More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;


