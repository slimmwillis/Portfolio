import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero_section/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import "./index.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Dialog, DialogTitle, stepButtonClasses } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "./components/footer/Footer";
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
import Contact from "./pages/Contact.jsx";
import { Toaster } from "react-hot-toast";
import DialogBox from "./components/dialog/DialogBox";

function App() {
  const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

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
                onClick={()=>setOpen(true)}
                sx={{ fontSize: 100, position: "fixed", bottom: 10, right: 10 }}
              />
              <DialogBox open={open} func={setOpen}></DialogBox>
            </>
          }
        />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/aboutme"} element={<AboutMe />} />
      </Routes>
          <Footer></Footer>
      <Toaster />
    </>
  );
}

export default App;
