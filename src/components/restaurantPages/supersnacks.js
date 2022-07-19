import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function supersnacks() {
  return (
    <>
      <div>
        <br></br>
        <h1>Supersnacks</h1>
        <br></br>
        <img 
          src="images/cards-utn-supersnacks1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Supersnacks" && (
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
            href='https://www.facebook.com/SuperSnacks/'
            target="_blank"
          >
          <h2>
            <h5>https://www.facebook.com/SuperSnacks/</h5>
          </h2>
          </a>
          <br></br>
          <h2>Order Now</h2>
          <a
            href='https://www.yqueue.co/sg/menu/supersnacks-nus-u-town'
            target="_blank"
          >
          <h2>
            <h5>Menu @UTown</h5>
          </h2>
          </a>
          <a
            href='https://www.yqueue.co/sg/menu/supersnacks-nus-prince-georges-park'
            target="_blank"
          >
          <h2>
            <h5>Menu @PGPR</h5>
          </h2>
          </a>
      </div>
    </>
  )
}

export default supersnacks;