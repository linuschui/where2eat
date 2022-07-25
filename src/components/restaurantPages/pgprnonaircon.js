import React, { useState , useEffect } from 'react'
import fire from "../../fire";
import firebase from "firebase";
import './images.css';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function Pgprnonaircon() {

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
      .doc("fu72nb26wjBh85")
      .update({
        like: increment
      })
      setIsLike(true)   
    } else if (isDislike === false && isLike === true) {
      db.collection('restaurant')
      .doc("fu72nb26wjBh85")
      .update({
        like: decrement
      })
      setIsLike(false)  
    } else if (isDislike === true && isLike === false) {
      db.collection('restaurant')
      .doc("fu72nb26wjBh85")
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
      .doc("fu72nb26wjBh85")
      .update({
        dislike: increment
      })
      setIsDislike(true)
    } else if (isDislike === true && isLike === false) {
      db.collection('restaurant')
      .doc("fu72nb26wjBh85")
      .update({
        dislike: decrement
      })
      setIsDislike(false)
    } else if (isDislike === false && isLike === true) {
      db.collection('restaurant')
      .doc("fu72nb26wjBh85")
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
        <h1>PGPR Non-Aircon Canteen</h1>
        <br></br>
        <img 
          src="images/cards-pgpr-nonaccanteen1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "PGPR Non Aircon Canteen" && (
                <h2 key={res.id}>
                  {res.Faculty === "PGPR" ? (
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
            href='https://www.theprivegroup.com.sg/'
            target="_blank"
          >
          <h2>
            <h5>https://www.theprivegroup.com.sg/</h5>
          </h2>
          </a> */}
      </div>
      <h2>Ban Mian Fish Soup</h2>
      <img 
          src="images/menu-pgpnonac-banmianfishsoup1.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Beverages</h2>
      <img 
          src="images/menu-pgpnonac-beverages1.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Chicken Rice</h2>
      <img 
          src="images/menu-pgpnonac-chickenrice1.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Chinese Delights</h2>
      <img 
          src="images/menu-pgpnonac-chinesedelights1.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Indian</h2>
      <img 
          src="images/menu-pgpnonac-indian1.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Japanese</h2>
      <img 
          src="images/menu-pgpnonac-japanese1.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mala Hot Pot</h2>
      <img 
          src="images/menu-pgpnonac-mala1.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mini Wok</h2>
      <img 
          src="images/menu-pgpnonac-miniwok1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-pgpnonac-miniwok2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-pgpnonac-miniwok3.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mixed Vegetables Rice</h2>
      <img 
          src="images/menu-pgpnonac-mixedvegetablerice1.png" 
          class="menu"
        >
      </img>
            <img 
          src="images/menu-pgpnonac-mixedvegetablerice2.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Stew Soup</h2>
      <img 
          src="images/menu-pgpnonac-stewsoup1.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Taiwanese</h2>
      <img 
          src="images/menu-pgpnonac-taiwanese1.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Western</h2>
      <img 
          src="images/menu-pgpnonac-western1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-pgpnonac-western2.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default Pgprnonaircon;