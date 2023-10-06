import React from "react";
import "./footer.css";
import { HashLink } from "react-router-hash-link";
import { Link, NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="foot">
        <div className="wrap">
          <div className="s1">
            <h1>William Bailey</h1>
            <p>
              A web designer and developer from Jacksonville, Florida. I always
              make websites that have unique designs and also has a good
              performance rate.
            </p>
          </div>
          <div className="s2">
            <h2>Important Links</h2>
            <ul>
              <li>
                <HashLink to="/#root">Home</HashLink>
              </li>
              <li>
                <HashLink to={"/aboutme#root"}>About</HashLink>{" "}
              </li>
              <li>
                <HashLink to={"/#projects"}>Project</HashLink>{" "}
              </li>
              <li>
                <HashLink to={"/#skills"}>Skills</HashLink>{" "}
              </li>
              <li>
                <HashLink to={"/contact#root"}>Contact</HashLink>{" "}
              </li>
            </ul>
          </div>
          <div className="s3">
            <h2>Contact Info</h2>
            <ul>
              <li>+1(904)800-5911</li>
              <li>developer@wbailey.us</li>
              <li>Jacksonville </li>
              <li>Florida, United States </li>
            </ul>
          </div>
          <div className="s4">
            <h2>Social Links</h2>
            <ul>
              <li>
                <a href="https://www.facebook.com/Wbailey89" target={"_blank"}>
                  {" "}
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.codewars.com/users/slimmwillis"
                  target={"_blank"}
                >
                  {" "}
                  Codewars
                </a>
              </li>
              <li>
                <a href="https://github.com/slimmwillis" target={"_blank"}>
                  {" "}
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@slimmwillis/featured"
                  target={"_blank"}
                >
                  {" "}
                  Youtube
                </a>
              </li>
              <li>
                <a href="https://codepen.io/Slimmwillis" target={"_blank"}>
                  {" "}
                  CodePen.io
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="wrap">
          <p>
            © 2023 - William Bailey | Designed with Passion By William Bailey
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
