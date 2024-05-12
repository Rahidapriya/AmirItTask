
import ban4 from '../../assets/banner.png'
import './banner.css'
import './ScrollDown.css'
const Banner = () => {
    return (
        <div className='mt-16'>
            <div className="flex items-center gap-4 w-10/12 mx-auto ">
    <img src={ban4} className="w-4/12 mx-auto" />
    <div className='flex flex-col w-4/12 mx-auto'>
      <h1 className="text-5xl font-bold">Creative Digital Agency</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="border-2 border-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black rounded-full px-4 py-2 w-3/4 text-white ">Learn More</button>
    </div>
  </div>
  <div className="container">
	<div className="field">
		
		<div className="scroll"></div>
		
	</div>
</div>
        </div>
    );
};

export default Banner;