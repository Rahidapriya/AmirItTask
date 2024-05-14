import { useEffect } from "react";
import ban4 from "../../assets/banner33.png";
import "./banner.css";
import "./ScrollDown.css";
import { FaLongArrowAltDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="pt-10 lg:min-h-screen bg-[#96EFFF] relative ">
      <div className=" hidden md:block w-[500px] h-[500px] bg-[#5FBDFF] rounded-full   absolute top-[50%] right-0 translate-x-[70%] -translate-y-[50%]"></div>
      <div className="flex  flex-col lg:flex-row lg:justify-center  gap-4 items-center xl:w-10/12 mx-auto  ">
        
          <img
            src={ban4}
            className="w-8/12 md:w-6/12 lg:w-6/12   mx-auto header "
            data-aos="fade-right"
          />
       
        <div
          className="flex  flex-col justify-center items-center md:justify-start md:items-start w-8/12 md:w-6/12 lg:w-6/12"
          data-aos="fade-left"
        >
          <h1 className="text-3xl text-center md:text-start md:text-4xl lg:text-6xl font-bold text-black">
            <span className="text-[#5FBDFF]">Creative</span> <br /> Digital Agency
          </h1>
          <p className="py-6 text-center md:text-start">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="border-2  border-[#5FBDFF]  bg-[#7B66FF] transition duration-300 hover:-translate-y-1 hover:bg-[#5FBDFF] hover:text-black rounded-full px-4 py-2 md:w-3/12 w-1/2 text-white ">
            Learn More
          </button>
        </div>
      </div>
      {/* 7B66FF 5FBDFF 96EFFF */}
      <div className="pb-10    flex items-center justify-center transition duration-300 hover:-translate-y-2 mt-16">
        <button
          onClick={scrollToNextSection}
          className="font-bold text-center mx-3 text-[14px] "
        >
          Scroll Down
        </button>
        <FaLongArrowAltDown className=""></FaLongArrowAltDown>
        {/* <div className="field">
		
		<button onClick={scrollToNextSection} className="scroll"></button>
		
	</div> */}
      </div>
      <div className=" hidden md:block w-[200px] h-[200px] bg-[#5FBDFF] rounded-full   absolute top-[50%] left-0 -translate-x-[70%] translate-y-[10%]"></div>
    </div>
  );
};

export default Banner;
