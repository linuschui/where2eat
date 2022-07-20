import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function finefood() {
  return (
    <>
      <div>
        <br></br>
        <h1>Fine Food</h1>
        <br></br>
        <img 
          src="images/cards-utn-finefood1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Fine Food" && (
                <h2 key={res.id}>
                  <br></br>
                  {res.Building}<br></br>
                  <h5>
                    Term Opening Hours <br></br>
                    {res.TermOpHours} <br></br>
                    <br></br>
                    Vacation Opening Hours <br></br>
                    {res.VacOpHours} <br></br>
                    <br></br>
                    {/* Contact <br></br>
                    {res.Contact} */}
                  </h5>
                </h2>
              )
            )
          }
        <br></br>
          {/* <h2>Website</h2>
          <a
            href='https://www.facebook.com/eurekatastesg/'
            target="_blank"
          >
          <h2>
            <h5>https://www.facebook.com/eurekatastesg/</h5>
          </h2>
          </a> */}
      </div>
      <h2>Hong Kong Gourmet</h2>
      <img 
          src="images/menu-finefood-hongkongourmet.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Beverages x Dim Sum x Waffles</h2>
      <img 
          src="images/menu-finefood-beverages1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-beverages2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-beverages3.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-beverages4.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-beverages5.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mixed Greens</h2>
      <img 
          src="images/menu-finefood-mixedgreens1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-mixedgreens2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-mixedgreens3.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-mixedgreens4.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-mixedgreens5.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Nano Partea</h2>
      <img 
          src="images/menu-finefood-nanopartea.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Western</h2>
      <img 
          src="images/menu-finefood-western.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Taiwan Cuisine</h2>
      <img 
          src="images/menu-finefood-taiwancuisine.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Hot Snail Noodle</h2>
      <img 
          src="images/menu-finefood-hotsnailnoodle.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Taiwanese</h2>
      <img 
          src="images/menu-finefood-taiwanese.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mixed Veg Rice</h2>
      <img 
          src="images/menu-finefood-mixedvegrice.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mala Hot Pot</h2>
      <img 
          src="images/menu-finefood-malahotpot1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-malahotpot2.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Five Grains Bee Hoon</h2>
      <img 
          src="images/menu-finefood-fivegrainsbeehoon.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Duck & Chicken Rice</h2>
      <img 
          src="images/menu-finefood-duckchickenrice.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Japanese & Korean</h2>
      <img 
          src="images/menu-finefood-mixedvegrice.PNG" 
          class="menu"
        >
      </img>
    </>
  )
}

export default finefood;