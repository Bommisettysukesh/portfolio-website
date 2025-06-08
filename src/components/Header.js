import React from 'react';
import { motion } from 'framer-motion';
import '../styles/global.css';

const Header = () => {
  return (
    <header>
        <div class="container nav-container">
            <a href="#" class="logo">SB</a>
            <ul class="nav-links">
                <li><a href="#about" class="active">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>
  )}

export default Header;