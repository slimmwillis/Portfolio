import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero_section/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import "./index.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Dialog, DialogTitle, stepButtonClasses } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { io } from "socket.io-client";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  Switch,
  withRouter,
} from "react-router-dom";
import AboutMe from "./pages/AboutMe.js";
import Contact from "./pages/Contact.js";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.emit("uptome", "information");
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Hero />
              <Skills />
              <Projects />
              <ChatBubbleOutlineOutlinedIcon
                onClick={handleOpen}
                sx={{ fontSize: 100, position: "fixed", bottom: 10, right: 10 }}
              />
              <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Contact Informtaion</DialogTitle>
          <h5 class="contactDetails">WhatsApp and Phone number</h5>
          <p class="contactDetails">{`+1(904)800-5911`}</p>
          <h5 class="contactDetails">Email</h5>
          <p class="contactDetails">{`slimmwillis@gmail.com`}</p>
        </Dialog>{" "}
            </>
          }
        />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/aboutme"} element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
