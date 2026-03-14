import React from 'react'
import LWlogo from '../downloads/1000_F_122731271_Uf0nvS9hYh4oCes7mN3FFyHUAD8M1AxM-removebg-preview.png';

export default function Header() {
  return (
    <div className="navbar">
      <div className="space"></div>
      <ul className="menu">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </div>
  );
}