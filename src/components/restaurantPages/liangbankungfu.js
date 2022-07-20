import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function liangbankungfu() {
  return (
    <>
      <div>
        <br></br>
        <h1>Liang Ban Kung Fu</h1>
        <br></br>
        <img 
          src="images/cards-com-liangbankungfu.png" 
          class="logo"
        >
        </img>
        <br></br> 
          {resData.map(
            res => 
              res.Name == "Liang Ban Kung Fu" && (
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
          src="images/menu-liangbankungfu.png" 
          class="menu"
        >
      </img>
    </>
  )
}


export default liangbankungfu;