import React from "react";
import "./Filters.css";
import filter1 from "../../assets/images/filter-1.png";
import filter2 from "../../assets/images/filter-2.png";
import filter3 from "../../assets/images/filter-3.png";
import filter4 from "../../assets/images/filter-4.png";

export default function Filters(){
    return     <div id="filters-section">
    <div class="content center">
      <h2>Over 20+ filters to choose from</h2>
      <h3>Feed your creativity with 20 different filter designed by our eclectic in-house photographers!</h3>
    </div>
    <div class="images-container">
      <div class="image-container">
        <img src={filter1} />
      </div>
      <div class="image-container">
        <img src={filter2} />
      </div>
      <div class="image-container">
        <img src={filter3} />
      </div>
      <div class="image-container extra">
        <img src={filter4} />
      </div>
    </div>
  </div>
}