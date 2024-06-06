import React from 'react';
import myImage from '../../../src/assets/Home.png';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className="home-container">   
      <img src={myImage} alt="Description" className="home-image" />
      <button onClick={() => { navigate("/gallery") }} className="home-button">Go to gallery</button>    
      <p className="home-text">
        The iPhone, a revolutionary product developed by Apple Inc., has transformed the landscape of mobile technology since its debut in 2007. Pioneered by the visionary Steve Jobs, the iPhone redefined what a smartphone could be, seamlessly blending cutting-edge hardware with intuitive software.
        <br /><br />
        With each iteration, Apple has pushed the boundaries of innovation, introducing new features and functionalities that have set industry standards. From the iconic design to the powerful performance driven by custom-built chips, every aspect of the iPhone is meticulously crafted to deliver an unparalleled user experience.
      </p>
    </div>
  );
}
