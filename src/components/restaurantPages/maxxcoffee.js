import React, { useState , useEffect } from 'react'
import fire from "../../fire";
import firebase from "firebase";
import './images.css';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function Maxxcoffee() {

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
      .doc("92309792389574")
      .update({
        like: increment
      })
      setIsLike(true)   
    } else if (isDislike === false && isLike === true) {
      db.collection('restaurant')
      .doc("92309792389574")
      .update({
        like: decrement
      })
      setIsLike(false)  
    } else if (isDislike === true && isLike === false) {
      db.collection('restaurant')
      .doc("92309792389574")
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
      .doc("92309792389574")
      .update({
        dislike: increment
      })
      setIsDislike(true)
    } else if (isDislike === true && isLike === false) {
      db.collection('restaurant')
      .doc("92309792389574")
      .update({
        dislike: decrement
      })
      setIsDislike(false)
    } else if (isDislike === false && isLike === true) {
      db.collection('restaurant')
      .doc("92309792389574")
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
        <h1>Maxx Coffee</h1>
        <br></br>
        <img 
          src="images/cards-fass-maxx1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "Maxx Coffee" && (
                <h2 key={res.id}>
                  {res.Faculty === "FASS" ? (
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
          <h2>Website</h2>
          <a
            href='https://www.maxx-coffee.sg/'
            target="_blank"
          >
          <h2>
            <h5>https://www.maxx-coffee.sg/</h5>
          </h2>
          </a>
      </div>
      <img 
          src="images/menu-maxxcoffee.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default Maxxcoffee;