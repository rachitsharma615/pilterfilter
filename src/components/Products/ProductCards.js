import React from "react";
import './cards.scss'

function ProductCards() {
  return (
      <div className="AllCards">
    <div class="card">
    <img class="card-image" src="https://mzwmotor.com/wp-content/uploads/2020/05/air-filter.png" alt=""/>
    <h2 class="card-title">Car Filters</h2>
    <p class="card-price">₹250.0 <span>₹300.0</span></p>
    <button class="card-action">Buy now</button>
</div>
<div class="card">
    <img class="card-image" src="https://mzwmotor.com/wp-content/uploads/2020/05/air-filter.png" alt=""/>
    <h2 class="card-title">Car Filters</h2>
    <p class="card-price">₹250.0 <span>₹300.0</span></p>
    <button class="card-action">Buy now</button>
</div>

</div>

  )
}
export default ProductCards;