import React, { useState , useEffect } from 'react'
import firebase from "../../fire";
import './images.css';

function Pgpraircon() {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const ref = firebase.firestore().collection("restaurant");
  console.log(ref);

  function getData() {
    setLoader(true);
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setData(items)
      setLoader(false)
    })
  }

  useEffect(() => {
    getData()
    console.log(data)
  }, [])

  return (
    <>
      <div>
        <br></br>
        <h1>PGPR Aircon Canteen</h1>
        <br></br>
        <img 
          src="images/cards-pgpr-acfoodcourt1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "PGPR Aircon Canteen" && (
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
            href='https://www.theprivegroup.com.sg/'
            target="_blank"
          >
          <h2>
            <h5>https://www.theprivegroup.com.sg/</h5>
          </h2>
          </a> */}
      </div>
      <img 
          src="images/menu-prive1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-prive2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-prive3.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default Pgpraircon;