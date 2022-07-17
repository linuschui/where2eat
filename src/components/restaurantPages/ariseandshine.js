import React from 'react'
import resData from "../../data/allRestaurants.json";

function ariseandshine() {
  return (
    <>
    <h1>Arise and Shine</h1>
        {resData.map(
            res => 
              res.Name == "Arise and Shine" && (
                <h2 key={res.id}>
                  {res.Location}<br></br>
                  {res.Building}<br></br>
                  Term Opening Hours : {res.TermOpHours}<br></br>

                </h2>
              )
          
          )}
    </>
  )
        }


export default ariseandshine;