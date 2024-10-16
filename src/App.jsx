
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
 

  return (
   <div>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Homepage/>}/>
     <Route path='/work' element={<Work/>}/>
     <Route path='/services' element={<Service/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
   </div>
  )
}

export default App
