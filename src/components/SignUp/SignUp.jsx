import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div id="sign-up-section" class="banner">
      <div id="sign-up-cta">
        <div class="content center">
          <div class="header">
            <h2 class="cursive">Instant</h2>
            <h1 class="striking">FORMAT CAMERA</h1>
          </div>
          <div class="email">
            <span>
             Get yours today and be among the few to get out limited edition{" "}
              <strong>Febuary 2025</strong> release!
            </span>
            <Link to="/checkout"><div class="button">Make Your Order</div></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
