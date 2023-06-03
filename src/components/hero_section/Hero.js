import React from "react";
import TheSun from "./TheSun";
import "./hero.css";
import { useEffect, useState } from "react";
import { Dialog, DialogTitle, stepButtonClasses } from "@mui/material";

function Hero() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="hero">
      <TheSun />

      <div className="hero__content">
        <h2 className="hero__name">William Bailey</h2>
        <h3 className="hero__title">Web /WordPress /Game Developer</h3>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Contact Informtaion</DialogTitle>
          <h5 class="contactDetails">WhatsApp and Phone number</h5>
          <p class="contactDetails">{`+1(904)800-5911`}</p>
          <h5 class="contactDetails">Email</h5>
          <p class="contactDetails">{`slimmwillis@gmail.com`}</p>
        </Dialog>{" "}
        <button className="btn" onClick={handleOpen}>
          Hire Me
        </button>
      </div>
      {/* <div id="skills"> </div> */}
    </div>
  );
}

export default Hero;
