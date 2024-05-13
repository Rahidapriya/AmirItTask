
import { useEffect } from 'react';
import ban4 from '../../assets/banner.png'
import './banner.css'
import './ScrollDown.css'
import { FaLongArrowAltDown } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: '1000' });
  }, []);
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.next-section');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }}
    return (
        <div className='mt-16 lg:min-h-screen md:mb-20 lg:mb-0 '>
            <div className="flex flex-col lg:flex-row items-center gap-4 xl:w-10/12 mx-auto ">
    <img src={ban4} className="md:w-6/12 lg:w-4/12 mx-auto header" data-aos="fade-right" />
    <div className='flex flex-col md:w-6/12 lg:w-4/12 mx-auto' data-aos="fade-left">
      <h1 className="text-5xl font-bold text-[#594E98]">Creative Digital Agency</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="border-2 border-white  bg-red-600 transition duration-300 hover:-translate-y-1 hover:bg-purple-600 hover:text-black rounded-full px-4 py-2 w-3/4 text-white ">Learn More</button>
    </div>
  </div>
  <div className="container  flex items-center justify-center transition duration-300 hover:-translate-y-2 mt-16">
    <button onClick={scrollToNextSection} className='font-bold text-center mx-3 text-[14px] '>Scroll Down</button>
    <FaLongArrowAltDown className=''></FaLongArrowAltDown>
	{/* <div className="field">
		
		<button onClick={scrollToNextSection} className="scroll"></button>
		
	</div> */}
</div>
        </div>
    );
};

export default Banner;