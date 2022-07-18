import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function barbarblacksheep() {
  return (
    <>
      <div>
      <h1>Bar Bar Black Sheep</h1>
          {resData.map(
              res => 
                res.Name == "Bar Bar Black Sheep" && (
                  <h2 key={res.id}>
                    {res.Building}<br></br>
                    <h5>
                      Term Opening Hours <br></br>
                      {res.TermOpHours}<br></br>
                      <br></br>
                      Vacation Opening Hours <br></br>
                      {res.VacOpHours}
                    </h5>
                  </h2>
                )
            )}
            <br></br>
            <a
              href='https://www.bbbs.com.sg/kentridge-2/'
              target="_blank"
            >
              <h2>website : https://www.bbbs.com.sg/kentridge-2/</h2>
            </a>
        </div>
        <img 
          src="images/menu-bbbs1.jpg" 
          class="center"
        >
        </img>
        <img 
          src="images/menu-bbbs2.jpg" 
          class="center"
        >
        </img>
        <img 
          src="images/menu-bbbs3.jpg" 
          class="center"
        >
        </img>
    </>
  )
        }


export default barbarblacksheep;