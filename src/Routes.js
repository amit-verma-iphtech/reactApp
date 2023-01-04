import { Fragment } from "react";
import {  Route, Routes } from "react-router-dom";
import Home from './Modules/Home';
import About from "./Modules/About/about";
import Contact from "./Modules/Contact/contact";
const Routess = () =>{
    return (
        <>
<Fragment>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact-me" element={<Contact />}/>
      </Routes>
</Fragment>
</>
)}
export default Routess;