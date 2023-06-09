import React from 'react'
import "./footer.css"
import { HashLink } from 'react-router-hash-link'
import { Link,NavLink } from 'react-router-dom';
function Footer() {
  return (
    <>
    <div className="foot">
        <div className="wrap">
            <div className="s1">
                <h1>William Bailey</h1>
                <p>A freelance web designer and developer from Jharkhand, India. I always make websites that have unique designs and also has a good performance rate.</p>
            </div>
            <div className="s2">
                <h2>Important Links</h2>
                <ul>
                    <li><HashLink to="/#root">Home</HashLink>
                        </li>
                    <li><HashLink to={"/aboutme#root"}>About</HashLink> </li>
                    <li><HashLink to={"/#projects"} >Project</HashLink> </li>
                    <li><HashLink to={"/#skills"}>Skills</HashLink> </li>
                    <li><HashLink to={"/contact#root"}>Contact</HashLink> </li>
                   
                </ul>
            </div>
            <div className="s3">
                <h2>Contact Info</h2>
                <ul>
                    <li>+19048005911</li>
                    <li>williambailey.dev@gmail.com</li>
                    <li>Jacksonville </li>
                    <li>Florida, United States </li>
                </ul>
            </div>
            <div className="s4">
                <h2>Social Links</h2>
                <ul>
                    <li><a href="/" target={"_blank"}> Facebook</a></li>
                    <li><a href="/" target={"_blank"}> Codewars</a></li>
                    <li><a href="/" target={"_blank"}> Twitter</a></li>
                    <li><a href="/" target={"_blank"}> Instagram</a></li>
                   
                </ul>
                </div>
       
        </div>
    </div>
    <div className="copyright">
        <div className="wrap">
            <p>© 2023 - William Bailey | Designed By Satyam Dubey</p>
        </div>
    </div>
    </>
  )
}

export default Footer