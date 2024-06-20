import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import myImage from './assets/Home.png';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Gallery from './Components/Gallery/Gallery'
import Profile from './Components/Profile/Profile'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Error from './Components/Error/Error'

function App() {
  const socialNetworks = [
    { name: 'Facebook', link: 'https://www.facebook.com/' }, 
    { name: 'Xtwitter', link: 'https://twitter.com/' },
    { name: 'Instagram', link: 'https://www.instagram.com/' }, 
    { name: 'Linkedin',  link: 'https://www.linkedin.com/' },

    
  ];
  return (
    <div className='my-container'>


     
      <Router>
      <Routes>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/profile/:user' element={<Profile/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/error' element={<Error/>}/>
       </Routes>

          <nav className='menu-items'>
            <Link  className='menu-item' to="/gallery">Go to Gallery</Link> <br/>
            <Link  className='menu-item' to="/error">Error</Link> <br/>
            <Link  className='menu-item' to='/profile'>Profile</Link> <br/>
            <Link  className='menu-item' to="/">Home</Link>  
         </nav> 
      </Router>

      <Footer socialNetworks={socialNetworks}/>
      
    </div>
    
  )
}

export default App
