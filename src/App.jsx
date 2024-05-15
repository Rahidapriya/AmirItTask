
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'

import AboutUs from './components/aboutus/AboutUs.jsx'
import Subsection from './components/aboutus/Subsection.jsx'
function App() {
 

  return (
    <div className=' overflow-hidden '>
      
     
     <Navbar></Navbar>
     <Banner></Banner>
     <AboutUs></AboutUs>
     <Subsection></Subsection>
      
      
    </div>
  )
}

export default App
