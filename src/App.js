import { useEffect, useState } from "react"
import Header from "./components/header/Header"
import Hero from "./components/hero_section/Hero"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import "./index.css"
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Dialog, DialogTitle, stepButtonClasses } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {io} from "socket.io-client"

function App() {
  const [open, setOpen] = useState(false);
  
  useEffect(()=>{
    const socket = io("http://localhost:5500")
    socket.emit("uptome","information")
  }, [])


  const handleOpen =()=>{
    setOpen(true)
}
const handleClose =()=>{
  setOpen(false)
}


  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <ChatBubbleOutlineOutlinedIcon onClick={handleOpen} sx={{ fontSize: 100, position: "fixed", bottom: 10, right: 10}}/>
    
      <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
        hello world
    </Dialog>

    </>
  )
}

export default App
