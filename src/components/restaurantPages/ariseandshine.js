import React from 'react'
import resData from "../../data/allRestaurants.json";

function ariseandshine() {
  return (
    <>
      <div>
      <h1>Arise and Shine</h1>
          {resData.map(
              res => 
                res.Name == "Arise and Shine" && (
                  <h2 key={res.id}>
                    Location : {res.Location} <br></br>
                    Building : {res.Building}<br></br>
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
        </div>
    </>
  )
        }


export default ariseandshine;