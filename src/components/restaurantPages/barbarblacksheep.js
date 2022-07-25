import React, { useState , useEffect } from 'react'
import firebase from "../../fire";
import './images.css';

function Barbarblacksheep() {

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
        <h1>Bar Bar Black Sheep</h1>
        <br></br>
        <img 
          src="images/cards-yst-barbar1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "Bar Bar Black Sheep" && (
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
            href='https://www.bbbs.com.sg/'
            target="_blank"
          >
          <h2>
            <h5>https://www.bbbs.com.sg/</h5>
          </h2>
          </a>
      </div>
      <img 
          src="images/menu-bbbs1.jpg" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-bbbs2.jpg" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-bbbs3.jpg" 
          class="menu"
      >
      </img>
    </>
  )
}

export default Barbarblacksheep;