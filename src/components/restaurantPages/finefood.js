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
      {/* <img 
          src="images/menu-chopchop1.png" 
          class="menu"
        >
      </img> */}
    </>
  )
}

export default finefood;