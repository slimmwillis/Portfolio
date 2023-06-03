import React from "react";
import "./NavMenu.css";
import { Link,NavLink } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

function NavMenu() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    //changed div to nav
    <nav className="nav">
      <a href="/" className="brand-name">
        Baileys
      </a>

      {/* hamburger NavMenu */}
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
        <li>
            <HashLink to="/#projects" className="" onClick={()=>{setIsNavExpanded(false)}}>Projects</HashLink>
          </li>
          <li>
            <HashLink to="/#skills" className="" onClick={()=>{setIsNavExpanded(false)}}>Skills</HashLink> 
          </li>
          <li>
            <Link to="/aboutme" onClick={()=>{setIsNavExpanded(false)}}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={()=>{setIsNavExpanded(false)}}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Satyam's code  */}

      {/* <HashLink to={"/#root"}>Home</HashLink>
       <a href="/Aboutus">About</a> 
       <Link to={"/Aboutus"}>About Us</Link>
      <HashLink to={"/#skills"}>Skills</HashLink>
      <HashLink to={"/#projects"}>Projects</HashLink>
      <a href="/Contact">Contact</a> 
      <Link to={"/Contact"}>Contact</Link>  */}

      {/* <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a> */}
    </nav>
  );
}

export default NavMenu;
