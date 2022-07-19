import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function riceandstuff() {
  return (
    <>
      <div>
        <br></br>
        <h1>Rice & Stuff</h1>
        <br></br>
        <img 
          src="images/cards-pgpr-riceandstuff1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Rice & Stuff" && (
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
            href='https://sapore.com.sg/'
            target="_blank"
          >
          <h2>
            <h5>https://sapore.com.sg/</h5>
          </h2>
          </a> */}
      </div>
      <img 
          src="images/menu-theroyalsbistro1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro3.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro4.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro5.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro6.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro7.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro8.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro9.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro10.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro11.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default riceandstuff;