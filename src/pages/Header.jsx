import React from 'react'
import { NavLink } from 'react-router-dom';
import LWlogo from '../downloads/1000_F_122731271_Uf0nvS9hYh4oCes7mN3FFyHUAD8M1AxM-removebg-preview.png';

export default function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={LWlogo} className="logo" alt="LW Logo" />
            </div>
            <ul className="menu">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Projects
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}