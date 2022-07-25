import React, { useState , useEffect } from 'react'
import fire from "../../fire";
import firebase from "firebase";
import './images.css';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function Finefood() {

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
      .doc("43C3TK80Y9497M")
      .update({
        like: increment
      })
      setIsLike(true)   
    } else if (isDislike === false && isLike === true) {
      db.collection('restaurant')
      .doc("43C3TK80Y9497M")
      .update({
        like: decrement
      })
      setIsLike(false)  
    } else if (isDislike === true && isLike === false) {
      db.collection('restaurant')
      .doc("43C3TK80Y9497M")
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
      .doc("43C3TK80Y9497M")
      .update({
        dislike: increment
      })
      setIsDislike(true)
    } else if (isDislike === true && isLike === false) {
      db.collection('restaurant')
      .doc("43C3TK80Y9497M")
      .update({
        dislike: decrement
      })
      setIsDislike(false)
    } else if (isDislike === false && isLike === true) {
      db.collection('restaurant')
      .doc("43C3TK80Y9497M")
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
        <h1>Fine Food</h1>
        <br></br>
        <img 
          src="images/cards-utn-finefood1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "Fine Food" && (
                <h2 key={res.id}>
                  {res.Faculty === "UTown" ? (
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
            href='https://www.facebook.com/eurekatastesg/'
            target="_blank"
          >
          <h2>
            <h5>https://www.facebook.com/eurekatastesg/</h5>
          </h2>
          </a> */}
      </div>
      <h2>Hong Kong Gourmet</h2>
      <img 
          src="images/menu-finefood-hongkongourmet.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Beverages x Dim Sum x Waffles</h2>
      <img 
          src="images/menu-finefood-beverages1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-beverages2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-beverages3.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-beverages4.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-beverages5.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mixed Greens</h2>
      <img 
          src="images/menu-finefood-mixedgreens1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-mixedgreens2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-mixedgreens3.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-mixedgreens4.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-mixedgreens5.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Nano Partea</h2>
      <img 
          src="images/menu-finefood-nanopartea.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Western</h2>
      <img 
          src="images/menu-finefood-western.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Taiwan Cuisine</h2>
      <img 
          src="images/menu-finefood-taiwancuisine.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Hot Snail Noodle</h2>
      <img 
          src="images/menu-finefood-hotsnailnoodle.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Taiwanese</h2>
      <img 
          src="images/menu-finefood-taiwanese.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mixed Veg Rice</h2>
      <img 
          src="images/menu-finefood-mixedvegrice.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mala Hot Pot</h2>
      <img 
          src="images/menu-finefood-malahotpot1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-finefood-malahotpot2.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Five Grains Bee Hoon</h2>
      <img 
          src="images/menu-finefood-fivegrainsbeehoon.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Duck & Chicken Rice</h2>
      <img 
          src="images/menu-finefood-duckchickenrice.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Japanese & Korean</h2>
      <img 
          src="images/menu-finefood-mixedvegrice.PNG" 
          class="menu"
        >
      </img>
    </>
  )
}

export default Finefood;