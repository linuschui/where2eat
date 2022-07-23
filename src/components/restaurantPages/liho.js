import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function liho() {
  return (
    <>
      <div>
        <br></br>
        <h1>Liho</h1>
        <br></br>
        <img 
          src="images/cards-sde-liho1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "LiHO Tea" && (
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
          <a
            href='https://liho.members.royaltgroup.com/'
            target="_blank"
          >
          <h2>
            <h5>Website <br></br>
            https://liho.members.royaltgroup.com/</h5>
          </h2>
          </a>
      </div>
      <img 
          src="images/menu-liho1.jpeg" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-liho2.jpeg" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-liho3.jpeg" 
          class="menu"
      >
      </img>
    </>
  )
}


export default liho;