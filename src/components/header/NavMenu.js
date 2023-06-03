import React from "react"
import { Link,NavLink } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
function NavMenu() {
  return (
    <div className="nav">
      {/* <a href="#root"><Link to={"/#root"}> Home </Link></a> */}
      <HashLink to={"/#root"}>Home</HashLink>
      {/* <a href="/Aboutus">About</a> */}
      <Link to={"/Aboutus"}>About Us</Link>
      <HashLink to={"/#skills"}>Skills</HashLink>
      <HashLink to={"/#projects"}>Projects</HashLink>
      {/* <a href="/Contact">Contact</a> */}
      <Link to={"/Contact"}>Contact</Link>
    </div>
  )
}

export default NavMenu
