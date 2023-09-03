import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import More from "./Components/More";
import "./styles.css";
import ThemeContext from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Mid from "./Components/Mid";
// import Input from './Components/Input';
import { useState } from "react";

export default function App() {
  const [isLight, setIsLight] = useState(true);
  const changeTheme = () => {
    setIsLight((prevstate) => {
      return !prevstate;
    });
  };
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ isLight, changeTheme }}>
        <Navbar />
        <Mid />
       
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/More" element={<More />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
