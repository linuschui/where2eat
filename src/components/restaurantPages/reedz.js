import React, { useState , useEffect } from 'react'
import firebase from "../../fire";
import './images.css';

function Reedz() {

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
        <h1>Reedz Cafe</h1>
        <br></br>
        <img 
          src="images/cards-law-reedz1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "Reedz Cafe" && (
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
          <h2>Website</h2>
          <a
            href='https://reedzcafe.com/'
            target="_blank"
          >
          <h2>
            <h5>https://reedzcafe.com/</h5>
          </h2>
          </a>
      </div>
      <br></br>
      <h2>Menu @Shaw Alumni Foundation House</h2>
      <img 
          src="images/menu-reedz1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-reedz2.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Menu @Li Ka Shing Building</h2>
      <img 
          src="images/menu-reedz3.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default Reedz;