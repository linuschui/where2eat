import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function sapore() {
  return (
    <>
      <div>
        <br></br>
        <h1>Sapore Italian Restaurant</h1>
        <br></br>
        <img 
          src="images/cards-utn-sapore1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Sapore Italian Restaurant" && (
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
            href='https://sapore.com.sg/'
            target="_blank"
          >
          <h2>
            <h5>https://sapore.com.sg/</h5>
          </h2>
          </a>
      </div>
      <img 
          src="images/menu-sapore1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore3.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore4.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore5.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore6.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore7.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore8.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore9.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore10.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore11.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore12.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore13.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore14.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore15.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore16.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default sapore;