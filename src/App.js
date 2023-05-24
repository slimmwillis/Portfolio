import Header from "./components/header/Header";
import Hero from "./components/hero_section/Hero";
import "./index.css";
import { useEffect, useState } from "react";
function App() {
  const [name, setName] = useState("Darshan");
  //what is inceptors
  //token

  // useEffect(() => {
  //   fetchApi();
  // }, []);
  const fetchApi = async () => {
    try {
      const response = await fetch("http://localhost:4000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "darshan" }),
      });
      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData);
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      {name}
      <Test
        onPress={() => {
          setName("maira");
        }}
      ></Test>

      <Header />
      <Hero />
    </>
  );
}
const Test = ({ onPress }) => {
  return <button onClick={onPress}>Name</button>;
};
export default App;
