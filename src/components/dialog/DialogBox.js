import React from 'react'
import { Dialog, DialogTitle, Button } from "@mui/material";
import "./dialog.css"
function DialogBox({ open, func }) {
  // const handleClose = () => {
  //   open=false;
  // };
  console.log(open);
  return (
    <Dialog open={open} onClose={() => { func(false) }} >
      <DialogTitle>Contact Information</DialogTitle>
      <h5 class="contactDetails">WhatsApp and Phone number</h5>
      <p class="contactDetails">{`+1(904)800-5911`}</p>
      <h5 class="contactDetails">Email</h5>
      <p class="contactDetails">{`slimmwillis@gmail.com`}</p>
      <div className="btns">
        <a href="https://wa.me/+19048005911" target={"_blank"}>
        <Button variant="outlined" startIcon={<i class="fa-brands fa-whatsapp"></i>} >
          Whatsapp
        </Button>
        </a>
        <Button variant="outlined" startIcon={<i class="fa-solid fa-paper-plane"></i>}  onClick={() => window.location = 'mailto:slimmwillis@gmail.com'}>
          E-Mail
        </Button>
      </div>
    </Dialog>
  )
}

export default DialogBox