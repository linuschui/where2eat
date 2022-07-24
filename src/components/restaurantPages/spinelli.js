import React, { useState , useEffect } from 'react'
import firebase from "../../fire";
import './images.css';

function Spinelli() {

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
        <h1>Spinelli Coffee</h1>
        <br></br>
        <img 
          src="images/cards-scp-spinelli1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "Spinelli Coffee" && (
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
            href='https://spinellicoffee.com/'
            target="_blank"
          >
          <h2>
            <h5>https://spinellicoffee.com/</h5>
          </h2>
          </a>
      </div>
      {/* <img 
          src="images/menu-theroyalsbistro1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro3.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro4.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro5.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro6.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro7.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro8.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro9.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro10.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-theroyalsbistro11.png" 
          class="menu"
        >
      </img> */}
    </>
  )
}

export default Spinelli;