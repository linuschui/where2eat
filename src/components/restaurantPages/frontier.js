import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function frontier() {
  return (
    <>
      <div>
        <br></br>
        <h1>Frontier</h1>
        <br></br>
        <img 
          src="images/cards-scp-frontier1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Frontier" && (
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
            href='https://forewordcoffee.com/'
            target="_blank"
          >
          <h2>
            <h5>https://forewordcoffee.com/</h5>
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

export default frontier;