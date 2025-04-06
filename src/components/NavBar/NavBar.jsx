import React from "react";
import "./NavBar.css";
import instaLogo from "../../assets/images/instagram.png"
import logo from "../../assets/images/ic-logo.svg";
import productIcon from "../../assets/images/ic-product-detail.svg"
import aboutUsIcon from "../../assets/images/ic-about-us.svg";


export default function NavBar() { 
    return <>
    <header>
    <div className="content">
      <a href="index.html" className="desktop logo">Fotomatic</a>
      <nav className="desktop">
        <ul>
          <li><a href="#features-section">Product detail</a></li>
          <li><a href="#filters-section">About us</a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="follow-button">Follow us <img className="icon" src={instaLogo} /></a></li>
          <li className="list-button"><a href="#" className="button">Order Now</a></li>
        </ul>
      </nav>
      
      <nav className="mobile">
        <ul>
          <li><a href="/"><img src={logo}/></a></li>
          <li><a href="#features-section"><img src={productIcon}/></a></li>
          <li><a href="#filters-section"><img src={aboutUsIcon}/></a></li>
          <li><a href="#" className="button">Order Now</a></li>
        </ul>
      </nav>
    </div>
  </header>
    </>
}