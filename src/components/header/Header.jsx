import './header.css';
import React, { useEffect } from 'react';
import arrow from '../../assets/right.png';


const Header = () => {
  useEffect(() => {
    const navbarMenu = document.getElementById("menu");
    const burgerMenu = document.getElementById("burger");
    const headerMenu = document.getElementById("header");

    const handleBurgerClick = () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
    };

    const handleLinkClick = () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
    };

    const handleScroll = () => {
      if (window.scrollY >= 85) {
        headerMenu.classList.add("on-scroll");
      } else {
        headerMenu.classList.remove("on-scroll");
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && navbarMenu.classList.contains("is-active")) {
        navbarMenu.classList.remove("is-active");
      }
    };

    burgerMenu.addEventListener("click", handleBurgerClick);

    document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup event listeners on component unmount
      burgerMenu.removeEventListener("click", handleBurgerClick);
      document.querySelectorAll(".menu-link").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <a href="#" className="brand">P<span style={{color: 'var(--themeClr)'}}>cl</span></a>
        <div className="burger" id="burger">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <div className="menu" id="menu">
          <ul className="menu-inner">
            <li className="menu-item"><a href="/" className="menu-link">Home</a></li>
            <li className="menu-item"><a href="/products" className="menu-link">Features</a></li>
            <li className="menu-item"><a href="#" className="menu-link">Community</a></li>
            <li className="menu-item"><a href="#" className="menu-link">Blog</a></li>
            <li className="menu-item"><a href="/search" className="menu-link">Pricing</a></li>
          </ul>
        </div>
        <a href="/login" className="menu-block">Register Now &nbsp;&nbsp; <img src={arrow} style={{width: '15px'}} alt="" /></a>
      </nav>
    </header>
  );
};

export default Header;
