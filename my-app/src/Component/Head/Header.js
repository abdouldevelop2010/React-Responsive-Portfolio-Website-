import React, { useState } from "react";
import './Header.css'

const Header = () => {

    window.addEventListener('scroll',function(){
        // when scroll header at top
        const header = document.querySelector('.header')
        header.classList.toggle('active',window.scrollY > 100)
    })

    //toggle menu
    const [Mobile, setMobile] = useState(false)
    return (
     <>
       <header className="header">
         <div className="container d_flex">
             <div className="logo">
                 <img src="" alt="" />
             </div>

             <div className="navlink">
                 <ul className="link f_flex uppercase">
                    <li><a href="#home">home</a></li>
                    <li><a href="#features">features</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#resume">resume</a></li>
                    <li><a href="#blog">blog</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><button className="home-btn">BY NOW</button></li>
                 </ul>

                 <button className="toggle">
                      <i className="fas fa-times close home-btn"></i>
                      <i className="fas fa-bars open"></i>
                </button>
             </div>
        </div>
      </header>
     </>
    ) 
}

export default Header