import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function jewelcoffee() {
  return (
    <>
      <div>
        <br></br>
        <h1>Jewel Coffee</h1>
        <br></br>
        <img 
          src="images/cards-mdn-jewel1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Jewel Coffee" && (
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
          <h2>Website</h2>
          <a
            href='https://jewelcoffee.com/'
            target="_blank"
          >
          <h2>
            <h5>https://jewelcoffee.com/</h5>
          </h2>
          </a>
      </div>
      <img 
          src="images/menu-jewel1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-jewel2.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default jewelcoffee;