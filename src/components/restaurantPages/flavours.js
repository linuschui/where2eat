import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function flavours() {
  return (
    <>
      <div>
        <br></br>
        <h1>Flavours @ UTown</h1>
        <br></br>
        <img 
          src="images/cards-utn-flavours1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Flavours @ UTown" && (
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
            href='https://flash-coffee.com/sg/'
            target="_blank"
          >
          <h2>
            <h5>https://flash-coffee.com/sg/</h5>
          </h2>
          </a> */}
      </div>
      {/* <img 
          src="images/menu-flash1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-flash2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-flash3.png" 
          class="menu"
        >
      </img> */}
    </>
  )
}

export default flavours;