import React, { useState , useEffect } from 'react'
import fire from "../../fire";
import firebase from "firebase";
import './images.css';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

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

  const db = fire.firestore();
  const increment = firebase.firestore.FieldValue.increment(1);
  const decrement = firebase.firestore.FieldValue.increment(-1);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);
  const updateLike = () => {
    if (isDislike === false && isLike === false) {
      db.collection('restaurant')
      .doc("U92I1Y2S2Kd4N0")
      .update({
        like: increment
      })
      setIsLike(true)   
    } else if (isDislike === false && isLike === true) {
      db.collection('restaurant')
      .doc("U92I1Y2S2Kd4N0")
      .update({
        like: decrement
      })
      setIsLike(false)  
    } else if (isDislike === true && isLike === false) {
      db.collection('restaurant')
      .doc("U92I1Y2S2Kd4N0")
      .update({
        like: increment,
        dislike : decrement
      })
      setIsLike(true)
      setIsDislike(false) 
    }
  }

  const updateDislike = () => {
    if (isDislike === false && isLike === false) {
      db.collection('restaurant')
      .doc("U92I1Y2S2Kd4N0")
      .update({
        dislike: increment
      })
      setIsDislike(true)
    } else if (isDislike === true && isLike === false) {
      db.collection('restaurant')
      .doc("U92I1Y2S2Kd4N0")
      .update({
        dislike: decrement
      })
      setIsDislike(false)
    } else if (isDislike === false && isLike === true) {
      db.collection('restaurant')
      .doc("U92I1Y2S2Kd4N0")
      .update({
        like : decrement,
        dislike: increment
      })
      setIsLike(false);
      setIsDislike(true);
    }
  }

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
                  {res.Faculty === "Engineering" ? (
                    <>
                     <h5>{res.like} <i class="fa-solid fa-heart"></i> {res.dislike} <i class="fa-solid fa-heart-crack"></i></h5> 
                      <Button onClick={updateLike}>LIKE</Button>
                      <Button onClick={updateDislike}>DISLIKE</Button>
                      <Button component={ Link } to='/review'>REVIEW</Button> 
                      <br></br>
                    </>
                  ) : (
                    <br></br>
                  )}
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