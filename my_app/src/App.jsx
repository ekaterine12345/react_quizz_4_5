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
    { name: 'Facebook', link: 'https://www.facebook.com/' }, // Use the imported facebook icon
    { name: 'Instagram',  link: 'https://www.instagram.com/' }, // Use the imported instagram icon
    { name: 'Linkedin',  link: 'https://www.linkedin.com/' },
    { name: 'X-twitter', link: 'https://twitter.com/' },
    // Add more social networks as needed
  ];
  return (
    <div className='my-container'>
      <Router>
      <Routes>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/profile/:user' element={<Profile/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/home' element={<Error/>}/>
       </Routes>

          <nav>
            <Link to="/gallery">Go to Gallery</Link> <br/>
            <Link to="/error">Error</Link> <br/>
            <Link to='profile'>Profile</Link> <br/>
            <Link to="/home">Home</Link>  
         </nav> 
      </Router>

      <Footer/>
    </div>
    
  )
}

export default App
