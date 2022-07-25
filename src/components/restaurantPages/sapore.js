import React, { useState , useEffect } from 'react'
import fire from "../../fire";
import firebase from "firebase";
import './images.css';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function Sapore() {

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
      .doc("RslGufrqmij2Vv")
      .update({
        like: increment
      })
      setIsLike(true)   
    } else if (isDislike === false && isLike === true) {
      db.collection('restaurant')
      .doc("RslGufrqmij2Vv")
      .update({
        like: decrement
      })
      setIsLike(false)  
    } else if (isDislike === true && isLike === false) {
      db.collection('restaurant')
      .doc("RslGufrqmij2Vv")
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
      .doc("RslGufrqmij2Vv")
      .update({
        dislike: increment
      })
      setIsDislike(true)
    } else if (isDislike === true && isLike === false) {
      db.collection('restaurant')
      .doc("RslGufrqmij2Vv")
      .update({
        dislike: decrement
      })
      setIsDislike(false)
    } else if (isDislike === false && isLike === true) {
      db.collection('restaurant')
      .doc("RslGufrqmij2Vv")
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
        <h1>Sapore Italian Restaurant</h1>
        <br></br>
        <img 
          src="images/cards-utn-sapore1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "Sapore Italian Restaurant" && (
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
            href='https://sapore.com.sg/'
            target="_blank"
          >
          <h2>
            <h5>https://sapore.com.sg/</h5>
          </h2>
          </a>
      </div>
      <img 
          src="images/menu-sapore1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore2.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore3.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore4.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore5.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore6.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore7.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore8.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore9.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore10.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore11.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore12.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore13.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore14.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore15.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-sapore16.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default Sapore;