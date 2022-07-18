import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function nami() {
  return (
    <>
      <div>
        <br></br>
        <h1>Nami</h1>
        <br></br>
        <img 
          src="images/cards-com-nami1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Nami" && (
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
            href='https://www.facebook.com/lijicoffeehouse/'
            target="_blank"
          >
          <h2>
            <h5>https://www.facebook.com/lijicoffeehouse/</h5>
          </h2>
          </a> */}
      </div>
      {/* <img 
          src="images/menu-liji1.png" 
          class="menu"
        >
      </img> */}
    </>
  )
}

export default nami;