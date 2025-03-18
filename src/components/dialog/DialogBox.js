import React from "react";
import { Dialog, DialogTitle, Button } from "@mui/material";
import "./dialog.css";
function DialogBox({ open, func }) {
  // const handleClose = () => {
  //   open=false;
  // };
  console.log(open);
  return (
    <Dialog
      open={open}
      onClose={() => {
        func(false);
      }}
    >
      <DialogTitle>Contact Information</DialogTitle>
      <h5 class="contactDetails">WhatsApp and Phone number</h5>
      <p class="contactDetails">{`+1(904)649-0784`}</p>
      <h5 class="contactDetails">Email</h5>
      <p class="contactDetails">{`William@WBailey.US`}</p>
      <div className="btns">
        <a href="https://wa.me/+19046490784" target={"_blank"}>
          <Button
            variant="outlined"
            startIcon={<i class="fa-brands fa-whatsapp"></i>}
          >
            Whatsapp
          </Button>
        </a>
        <Button
          variant="outlined"
          startIcon={<i class="fa-solid fa-paper-plane"></i>}
          onClick={() => (window.location = "mailto:William@WBailey.US")}
        >
          E-Mail
        </Button>
      </div>
    </Dialog>
  );
}

export default DialogBox;
