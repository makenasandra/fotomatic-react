import React from "react";
import "./Features.css";
import feature1 from "../../assets/images/feature-1.png";
import feature2 from "../../assets/images/feature-2.png";

export default function Features() {
    return <div id="features-section">
    <div class="feature first">
      <div class="center">
        <div class="image-container">
          <img src={feature1} />
        </div>
        <div class="content">
          <h2>Advanced, automatic, instant</h2>
          <h3>Shutter speed, apperture and flash output adjust automatically</h3>
        </div>
      </div>
    </div>
    <div class="feature">
      <div class="center">
        <div class="image-container">
          <img src={feature2} />
        </div>
        <div class="content">
          <h2>Beautifully crafted inside-out</h2>
          <h3>From the paint outside to the tiny screw inside, Fotomatic is crafted with love and 20-year of expertise</h3>
        </div>
      </div>
    </div>
  </div>
}