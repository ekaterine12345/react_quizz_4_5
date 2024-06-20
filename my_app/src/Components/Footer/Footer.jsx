import React from 'react'
import styled from 'styled-components';
import './Footer.css'


export default function Footer(props) {
  return (
    <footer className='my-footer'>
      
        <h3>my footer - 2024</h3>
        <ul className='social-networks'>
          {props.socialNetworks.map((socialNetwork, index) => (
            <li className='social-network' key={index}>
              
              <a href={socialNetwork.link} target='_blank'>{socialNetwork.name}</a>
              </li>
          ))}
        </ul>
    </footer>
  )
}