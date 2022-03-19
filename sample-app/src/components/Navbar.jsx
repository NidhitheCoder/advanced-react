import React from "react";
import './Navbar.css';

const Navbar = ({children}) => {
  window.addEventListener('scroll', () => {
    let navbar = document.getElementById('nav');
    if (1938 > window.pageYOffset && window.pageYOffset  > 912){
      navbar.classList.add('navbar-show');
    } else {
      navbar.classList.remove('navbar-show');
    }
  });

  return (
    <div class="navbar" id="nav">{children}</div>
  )
};

export default Navbar;