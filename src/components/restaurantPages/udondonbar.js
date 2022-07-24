import React, { useState , useEffect } from 'react'
import firebase from "../../fire";
import './images.css';

function Udondonbar() {

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
        <h1>Udon Don Bar</h1>
        <br></br>
        <img 
          src="images/cards-utn-udon1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "Udon Don Bar" && (
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
            href='https://udondonbar.business.site/'
            target="_blank"
          >
          <h2>
            <h5>https://udondonbar.business.site/</h5>
          </h2>
          </a>
      </div>
      <img 
          src="images/menu-udon1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-udon2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-udon3.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-udon4.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-udon5.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-udon6.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-udon7.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-udon8.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-udon9.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-udon10.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-udon11.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default Udondonbar;