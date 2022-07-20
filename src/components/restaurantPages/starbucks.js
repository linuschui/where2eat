import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function starbucks() {
  return (
    <>
      <div>
        <br></br>
        <h1>Starbucks</h1>
        <br></br>
        <img 
          src="images/cards-utn-starbucks1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Starbucks" && (
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
            href='https://www.starbucks.com.sg/'
            target="_blank"
          >
          <h2>
            <h5>https://www.starbucks.com.sg/</h5>
          </h2>
          </a>
      </div>
      <img 
          src="images/menu-starbucks1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-starbucks2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-starbucks3.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-starbucks4.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-starbucks5.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-starbucks6.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default starbucks;