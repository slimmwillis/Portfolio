import React from "react";
import "./NavMenu.css";
import { Link, NavLink } from 'react-router-dom';
import { Link as SLink } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

function NavMenu() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    //changed div to nav
    <nav className="nav">
      <HashLink to="/#root" className="brand-name" onClick={() => { setIsNavExpanded(false) }}>
        Baileys
      </HashLink>

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
            <HashLink to="/#projects" className="" onClick={() => { setIsNavExpanded(false) }}>Projects</HashLink>
          </li>
          <li>
          {/* <SLink
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              Skills
            </SLink> */}
            <HashLink to="/#skills" className="" onClick={() => { setIsNavExpanded(false) }}>Skills</HashLink>
          </li>
          <li>
            
            <HashLink to="/aboutme#root" onClick={()=>{setIsNavExpanded(false)}}>About</HashLink>
          </li>
          <li>
            <HashLink to="/contact#root" onClick={() => { setIsNavExpanded(false) }}>Contact</HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavMenu;
