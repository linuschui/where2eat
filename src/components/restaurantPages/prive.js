import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function prive() {
  return (
    <>
      <div>
        <br></br>
        <h1>Prive Grill</h1>
        <br></br>
        <img 
          src="images/cards-biz-privegrill2.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Prive Grill" && (
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
            href='https://www.theprivegroup.com.sg/'
            target="_blank"
          >
          <h2>
            <h5>https://www.theprivegroup.com.sg/</h5>
          </h2>
          </a>
      </div>
      <img 
          src="images/menu-prive1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-prive2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-prive3.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default prive;