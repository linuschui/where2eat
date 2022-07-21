import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function bistrobox() {
  return (
    <>
      <div>
        <br></br>
        <h1>Bistro Box</h1>
        <br></br>
        <img 
          src="images/cards-sde-bistrobox2.png" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Bistro Box" && (
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
          {/* <a
            href='https://www.bbbs.com.sg/'
            target="_blank"
          >
          <h2>
            <h5>Website <br></br>
            https://www.bbbs.com.sg/</h5>
          </h2>
          </a> */}
      </div>
      <img 
          src="images/menu-bistrobox1.jpeg" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-bistrobox2.jpeg" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-bistrobox3.jpeg" 
          class="menu"
      >
      </img>
      <img 
          src="images/menu-bistrobox4.jpeg" 
          class="menu"
      >
      </img>
      <img 
          src="images/menu-bistrobox5.png" 
          class="menu"
      >
      </img>
      <img 
          src="images/menu-bistrobox6.png" 
          class="menu"
      >
      </img>
      <img 
          src="images/menu-bistrobox7.png" 
          class="menu"
      >
      </img>
            <img 
          src="images/menu-bistrobox8.png" 
          class="menu"
      >
      </img>
    </>
  )
}

export default bistrobox;