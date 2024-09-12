import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from './assets/menu_open.svg';
import menu_close from './assets/menu_close.svg';
import resume from './assets/EdgarFongResume.pdf';

function Navbar () {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const resumeRef = useRef();

const openMenu = () => {
  menuRef.current.style.right = "0";
  resumeRef.current.style.right = "0"; 
}

const closeMenu = () => {
  menuRef.current.style.right = "-350px";
  resumeRef.current.style.right = "-350px";  
}
    return (
      <div id= 'home' className="navbar">
        <img src={logo} alt="https://placehold.co/100" className="navbar-logo" />
        <img src={menu_open} onClick={openMenu} alt="menu" className="nav-mob-open" />
        <ol ref={menuRef} onClick={closeMenu} className="horizontal-list"> 
          <img src={menu_close} alt="" className="nav-mob-close" />
          <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")} style={menu==="home"?{color: "#64ffda"}:{}} >Home</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")} style={menu==="about"?{color: "#64ffda"}:{}} >About Me</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")} style={menu==="projects"?{color: "#64ffda"}:{}} >Projects</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")} style={menu==="contact"?{color: "#64ffda"}:{}} >Contact</p></AnchorLink></li>
        </ol>
        <div className="resume" ref={resumeRef}>
          <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
        {/* <hr /> */}
      </div>
    );
  }
  
  export default Navbar;