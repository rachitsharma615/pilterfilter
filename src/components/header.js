import React from "react";
import './header.scss'
import ProductCards from "./Products/ProductCards";

function header() {
  return (
      <>
    <header>
    <nav>
        <div className="headerTitle"> <h2>Pliter Filter</h2></div>
        <div className="menu">
            <ul>
                <li><a href="">New</a></li>
                <li><a href="">Trending</a></li>
                <li><a href="">Pricing</a></li>
            </ul>
        </div>
        <div className="login">
          <ul>
              <li><a href="">About</a></li>
              <li><a href="">FAQs</a></li>
              <li><a id="signup" href="">Contact</a></li>
          </ul>
        </div>
        <input type="checkbox" name="" id="hamburger"/>

        <div className="toogle">
            <label for="hamburger">
                <span></span>
            </label>
        </div>
    </nav>
</header>
 <main>

    {/* <div className="firstpagebutton">
        <a href="">Start Deploying</a>
        <a href="">Get a Demo</a>
    </div> */}

    <ProductCards/>
    
    {/* <div className="info">
        Wercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend teams to do their best work.
    </div>  */}
    
</main> 
</>
  );
}

export default header;
