import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png";
import { CiLogin } from 'react-icons/ci';
import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../components/providers/AuthProvider";
import { MdArrowDropDown } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import './navbar.css'



const Navbar = () => {
  
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
 
    window.addEventListener("scroll", handleScroll);

   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
 

  const scrollbg = isScrolled ? " shadow-md top-0 bg-[#96EFFF]" : "bg-[#96EFFF] ";
  // const navbarClass = isScrolled ? "sticky top-0 " : "";

    const navLinks=<>
    <li className=" "><NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending " : isActive ? " text-pink-500 font-bold nav-link nav-link-ltr  px-6 hover:text-red " : "px-6 "
                  }>Home</NavLink></li>
    <li><NavLink to="/aboutus" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-600 font-bold nav-link nav-link-ltr  px-6  underline-offset-8  hover:text-red   " : "px-6 "
                  }>About Us</NavLink></li>
                  <li><NavLink to="/ourworks" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-600 font-bold nav-link nav-link-ltr  px-6  underline-offset-8  hover:text-red   " : "px-6 "
                  }>Our Works</NavLink></li>
                  <li><NavLink to="/clients" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-600 font-bold nav-link nav-link-ltr  px-6  underline-offset-8  hover:text-red   " : "px-6 "
                  }>Clients</NavLink></li>
                  <li><NavLink to="/blogs" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-600 font-bold nav-link nav-link-ltr  px-6  underline-offset-8  hover:text-red   " : "px-6 "
                  }>Our Blogs</NavLink></li>
                  <li><NavLink to="/contact" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-600 font-bold nav-link nav-link-ltr  px-6  underline-offset-8  hover:text-red   " : "px-6 "
                  }>Contact Us</NavLink></li>       
    
    </>
    return (
      <div className=" z-50  mt-0">
        <div className={`drawer z-30  `}>
      <div className={`drawer z-30 py-3 sticky bg-blue-600 `}>
      <div className="drawer z-30 ${scrollbg} fixed">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className={` w-full ${scrollbg} transition   duration-1000 `}>
            <div className="max-w-[1400px] mx-auto navbar">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex lg:gap-2 xl:gap-16">
               <div className="flex  items-center ">
               
              <div className=" text-3xl lg:text-2xl xl:text-3xl font-bold text-black font-sans ">Megaone</div>
               </div>
              <div className="flex-none hidden lg:block">
                <ul className="flex lg:gap-0 xl:gap-3 lg:text-[12px] xl:text-[16px]">
                  {navLinks}
                </ul>
              </div>
              <div className="hidden lg:flex">
              <button className="lg:px-2 xl:px-4 py-2 text-[16px] lg:text-[12px] xl:text-[16px]   border-2 border-pink-400 example_d ">Get A Quotes</button>
              </div>
              <div>
                <ul className="hidden lg:flex gap-2  font-[20px] icon">
                  <li className="transition duration-500 hover:-translate-y-1 hover:text-white  hover:bg-pink-400 text-purple-700 font-medium bg-white rounded-full p-2"><BiLogoFacebook></BiLogoFacebook></li>
                  <li className="transition duration-500 hover:-translate-y-1 hover:text-white  hover:bg-pink-400 text-purple-700 font-medium bg-white rounded-full p-2">< FaInstagram></FaInstagram></li>
                  <li className="transition duration-500 hover:-translate-y-1 hover:text-white  hover:bg-pink-400 text-purple-700 font-medium bg-white rounded-full p-2"><SlSocialTwitter ></SlSocialTwitter></li>
                </ul>
              </div>
              </div>
              <div className="flex-1 mx-2 px-2">
                {/* {children} */}
              </div>
             
     
      
           
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className=" flex flex-col items-start w-80 min-h-full text-[16px] leading-10 pt-10 bg-base-200">
            {navLinks}
          
          </ul>
        </div>
      </div>
    </div>
    </div>
      </div>
  );
};

export default Navbar;