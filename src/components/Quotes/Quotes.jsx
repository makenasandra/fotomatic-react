import React from 'react';
import './Quotes.css';
import photographyLogo from "../../assets/images/photography-logo.png"

export default function Quotes(){
    return     <div id="quotes-section">
    <div class="content center">
      <span class="quote">“It’s truly something that could create a brand new photography Renaissance”</span>
      <img class="quote-citation" src={photographyLogo} />
    </div>
  </div>
}