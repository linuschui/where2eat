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
          src="images/menu-riceandstuff1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-riceandstuff2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-riceandstuff3.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-riceandstuff4.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-riceandstuff5.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-riceandstuff6.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-riceandstuff7.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-riceandstuff8.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-riceandstuff9.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-riceandstuff10.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-riceandstuff11.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default riceandstuff;