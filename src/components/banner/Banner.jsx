
import ban4 from '../../assets/banner.png'
import './banner.css'
import './ScrollDown.css'
import { FaLongArrowAltDown } from "react-icons/fa";
const Banner = () => {
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.next-section');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }}
    return (
        <div className='mt-16 min-h-screen '>
            <div className="flex items-center gap-4 w-10/12 mx-auto ">
    <img src={ban4} className="w-4/12 mx-auto" />
    <div className='flex flex-col w-4/12 mx-auto'>
      <h1 className="text-5xl font-bold">Creative Digital Agency</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="border-2 border-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black rounded-full px-4 py-2 w-3/4 text-white ">Learn More</button>
    </div>
  </div>
  <div className="container flex items-center justify-center transition duration-300 hover:-translate-y-2 mt-16">
    <button onClick={scrollToNextSection} className='font-bold text-center mx-3 text-[14px] '>Scroll Down</button>
    <FaLongArrowAltDown></FaLongArrowAltDown>
	{/* <div className="field">
		
		<button onClick={scrollToNextSection} className="scroll"></button>
		
	</div> */}
</div>
        </div>
    );
};

export default Banner;