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
  
  const [isScrolled, setIsScrolled] = useState(false);

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
 

  const containerClass = isScrolled ? "py-3" : ""; 
  const navbarClass = isScrolled ? "fixed top-0 left-0 right-0 bg-white shadow-md" : "";

    const navLinks=<>
    <li className=" "><NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending " : isActive ? " text-blue-400 font-bold nav-link nav-link-ltr  px-6 hover:text-red " : "px-6 "
                  }>Home</NavLink></li>
    <li><NavLink to="/aboutus" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-400 font-bold nav-link nav-link-ltr  px-6  underline-offset-8  hover:text-red   " : "px-6 "
                  }>About Us</NavLink></li>
                  <li><NavLink to="/ourworks" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-400 font-bold nav-link nav-link-ltr  px-6  underline-offset-8  hover:text-red   " : "px-6 "
                  }>Our Works</NavLink></li>
                  <li><NavLink to="/clients" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-400 font-bold nav-link nav-link-ltr  px-6  underline-offset-8  hover:text-red   " : "px-6 "
                  }>Clients</NavLink></li>
                  <li><NavLink to="/blogs" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-400 font-bold nav-link nav-link-ltr  px-6  underline-offset-8  hover:text-red   " : "px-6 "
                  }>Our Blogs</NavLink></li>
                  <li><NavLink to="/contact" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-400 font-bold nav-link nav-link-ltr  px-6  underline-offset-8  hover:text-red   " : "px-6 "
                  }>Contact Us</NavLink></li>       
    
    </>
    return (
      <div className=" z-50 ">
        <div className={`drawer z-30 ${containerClass} `}>
      <div className={`drawer z-30 py-3 ${navbarClass}`}>
      <div className="drawer z-30  fixed">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className={` shadow-md w-full `}>
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
              <div className="flex gap-16">
               <div className="flex  items-center ">
               
              <div className="  text-2xl font-bold ">DenMark</div>
               </div>
              <div className="flex-none hidden lg:block">
                <ul className="flex gap-3">
                  {navLinks}
                </ul>
              </div>
              <div className="hidden lg:flex">
              <button className="px-4 py-2   border-2 example_d ">Get A Quotes</button>
              </div>
              <div>
                <ul className="hidden lg:flex gap-2  font-[20px] icon">
                  <li className="transition duration-300 hover:-translate-y-1  text-purple-700 font-medium bg-white rounded-full p-2"><BiLogoFacebook></BiLogoFacebook></li>
                  <li className="transition duration-300 hover:-translate-y-1 text-purple-700 font-medium bg-white rounded-full p-2">< FaInstagram></FaInstagram></li>
                  <li className="transition duration-300 hover:-translate-y-1 text-purple-700 font-medium bg-white rounded-full p-2"><SlSocialTwitter ></SlSocialTwitter></li>
                </ul>
              </div>
              </div>
              <div className="flex-1 mx-2 px-2">
                {/* {children} */}
              </div>
             
     
        <div className="dropdown dropdown-end">
  {
   
    <ul tabIndex={0} className="dropdown-content z-[1]  p-2 shadow  rounded-box lg:w-72 lg:h-72 border-2 bg-pink-50" style={{ borderColor: '#D52B5C' }}>

      {/*  */}
    <div className="flex flex-col items-center justify-center mb-6">
    <div>
   
    </div>
      
     
      
    </div>
      {/*  */}
      <hr className="font-bold mb-4"/>
      <div className="ml-4">
      <Link to='/userdashboard'>Dashboard</Link>
      </div>
      
        
    <div className="flex items-center ">
    
   <div>
   <CiLogin className="text-xl"></CiLogin>
   </div>
    </div>
     
    </ul>
  }
</div>
        
             
            
              <div className="ml-5">
  <label className="swap swap-rotate">
  
</label>
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
          <ul className=" flex flex-col items-start w-80 min-h-full bg-base-200">
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