import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function hwangs() {
  return (
    <>
      <div>
        <br></br>
        <h1>Hwang's Korean Restaurant</h1>
        <br></br>
        <img 
          src="images/cards-utn-hwangs1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Hwang's Korean Restaurant" && (
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
            href='https://www.facebook.com/hwangskoreanrestaurant/'
            target="_blank"
          >
          <h2>
            <h5>https://www.facebook.com/hwangskoreanrestaurant/</h5>
          </h2>
          </a>
      </div>
      <img 
          src="images/menu-hwangs1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-hwangs2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-hwangs3.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-hwangs4.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-hwangs5.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default hwangs;