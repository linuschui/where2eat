import React from 'react'
import resData from "../../data/allRestaurants.json";

function ariseandshine() {
  return (
    <>
      <div>
        <br></br>
        <h1>Arise and Shine</h1>
        <br></br>
        <img 
          src="images/cards-scp-ariseandshine1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Arise and Shine" && (
                <h2 key={res.id}>
                  <br></br>
                  {res.Building}<br></br>
                  <h5>
                    Term Opening Hours <br></br>
                    {res.TermOpHours} <br></br>
                    <br></br>
                    Vacation Opening Hours <br></br>
                    {res.VacOpHours}
                  </h5>
                </h2>
              )
            )
          }
        <br></br>
          <a
            href='https://www.starbucks.com.sg/'
            target="_blank"
          >
          <h2>website : https://www.starbucks.com.sg/</h2>
          </a>
      </div>
    </>
  )
        }


export default ariseandshine;