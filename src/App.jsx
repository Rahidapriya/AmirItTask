
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import './components/cursorbubble/cursorbubble.js'
import './components/cursorbubble/cursorbubble.css'
function App() {
 

  return (
    <div className='info'>
      {/* <div className='text-3xl bg-red-400 text-center'>
      <h1>React with Tailwind</h1>
      </div> */}
     <Navbar></Navbar>
     <Banner></Banner>
      
      
    </div>
  )
}

export default App
