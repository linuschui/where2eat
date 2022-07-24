import React, { useState , useEffect } from 'react'
import firebase from "../../fire";
import './images.css'

function Centralsquare() {

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
        <h1>Central Square</h1>
        <br></br>
        <img 
          src="images/cards-yih-centralsquare1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "Central Square" && (
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
      <h2>Ban Mian Fish Soup</h2>
      <img 
          src="images/cards-yih-centralsquare-banmianfishsoup1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-centralsquare-banmianfishsoup1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Drinks</h2>
      <img 
          src="images/cards-yih-centralsquare-drinks1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-centralsquare-drinks1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-centralsquare-drinks2.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Jito's Dhaba</h2>
      <img 
          src="images/cards-yih-centralsquare-jitosdhaba1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-centralsquare-jitosdhaba1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Lamian Local Delight</h2>
      <img 
          src="images/cards-yih-centralsquare-lamian1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-centralsquare-lamian1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mala Hot Pot</h2>
      <img 
          src="images/cards-yih-centralsquare-mala1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-centralsquare-mala1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mixed Veg Rice</h2>
      <img 
          src="images/cards-yih-centralsquare-mixedvegrice1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-centralsquare-mixedvegrice1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Snacks</h2>
      <img 
          src="images/cards-yih-centralsquare-snacks1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/cards-yih-centralsquare-snacks2.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-centralsquare-snacks1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-centralsquare-snacks2.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-centralsquare-snacks3.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Supper</h2>
      <img 
          src="images/cards-yih-centralsquare-supper1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Thai</h2>
      <img 
          src="images/cards-yih-centralsquare-thai1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-centralsquare-thai1.PNG" 
          class="menu"
        >
      </img>
    </>
  )
}

export default Centralsquare;