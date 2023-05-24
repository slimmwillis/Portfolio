import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import './header.css';

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavMenu />
    </div>
  );
}

export default Header;
