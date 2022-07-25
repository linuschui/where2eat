import React, { useState , useEffect } from 'react'
import firebase from "../../fire";
import './images.css';

function Technoedge() {

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
        <h1>Techno Edge</h1>
        <br></br>
        <img 
          src="images/cards-sde-technoedge1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "Techno Edge" && (
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
            href='https://www.facebook.com/NUSTheCoffeeHut/'
            target="_blank"
          >
          <h2>
            <h5>https://www.facebook.com/NUSTheCoffeeHut/</h5>
          </h2>
          </a> */}
      </div>
      <h2>Chicken Rice</h2>
      <img 
          src="images/menu-techno-chickenrice1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-techno-chickenrice2.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Drinks and Snacks</h2>
      <img 
          src="images/menu-techno-drinksandsnacks1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-techno-drinksandsnacks2.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-techno-drinksandsnacks3.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Fruits and Juices</h2>
      <img 
          src="images/menu-techno-fruitsandjuices1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Indian</h2>
      <img 
          src="images/menu-techno-indian1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-techno-indian2.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mala Hot Pot</h2>
      <img 
          src="images/menu-techno-mala1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-techno-mala2.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mixed Rice</h2>
      <img 
          src="images/menu-techno-mixedrice1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-techno-mixedrice2.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Nasi Padang</h2>
      <img 
          src="images/menu-techno-nasipadang1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-techno-nasipadang2.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Noodles</h2>
      <img 
          src="images/menu-techno-noodles1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Ramen and Fish Soup</h2>
      <img 
          src="images/menu-techno-ramen1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-techno-ramen2.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Taiwanese</h2>
      <img 
          src="images/menu-techno-taiwanese1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-techno-taiwanese2.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Vegetarian</h2>
      <img 
          src="images/menu-techno-vegetarian1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Western</h2>
      <img 
          src="images/menu-techno-western1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-techno-western2.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-techno-western3.PNG" 
          class="menu"
        >
      </img>
    </>
  )
}

export default Technoedge;