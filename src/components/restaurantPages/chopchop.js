import React, { useState , useEffect } from 'react'
import firebase from "../../fire";
import './images.css';

function Chopchop() {

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
        <h1>Chop Chop by PUTIEN</h1>
        <br></br>
        <img 
          src="images/cards-utn-chopchop1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "Chop Chop by PUTIEN" && (
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
            href='https://www.chopchopbyputien.com/'
            target="_blank"
          >
          <h2>
            <h5>https://www.chopchopbyputien.com/</h5>
          </h2>
          </a>
      </div>
      <img 
          src="images/menu-chopchop1.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default Chopchop;