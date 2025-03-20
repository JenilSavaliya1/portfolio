import React, { useEffect, useState, useContext } from "react";
import '../Styles/Footer.css'
import { ThemeContext } from './ThemeContext';

function Footer() {
  const { theme, setTheme } = useContext(ThemeContext); 
  const color = theme === 'light' ? 'rgb(170, 156, 156)' : 'rgb(40, 37, 37)'; 
  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <footer style={{ backgroundColor: color, color: theme === 'light' ? 'black' : 'white' }}>
      <div className="text-center p-3">
        © 2025 My Portfolio: All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

