import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function waacow() {
  return (
    <>
      <div>
        <br></br>
        <h1>Waa Cow</h1>
        <br></br>
        <img 
          src="images/cards-utn-waacow1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Waa Cow" && (
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
                    Contact <br></br>
                    {res.Contact}
                  </h5>
                </h2>
              )
            )
          }
        <br></br>
          <h2>Website</h2>
          <a
            href='https://www.waacow.sg/'
            target="_blank"
          >
          <h2>
            <h5>https://www.waacow.sg/</h5>
          </h2>
          </a>
      </div>
      <img 
          src="images/menu-waacow1.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default waacow;