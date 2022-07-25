import React, { useState , useEffect } from 'react'
import fire from "../../fire";
import firebase from "firebase";
import './images.css';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function Frontier() {

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
      .doc("4ZF95eWQzQKV6P")
      .update({
        like: increment
      })
      setIsLike(true)   
    } else if (isDislike === false && isLike === true) {
      db.collection('restaurant')
      .doc("4ZF95eWQzQKV6P")
      .update({
        like: decrement
      })
      setIsLike(false)  
    } else if (isDislike === true && isLike === false) {
      db.collection('restaurant')
      .doc("4ZF95eWQzQKV6P")
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
      .doc("4ZF95eWQzQKV6P")
      .update({
        dislike: increment
      })
      setIsDislike(true)
    } else if (isDislike === true && isLike === false) {
      db.collection('restaurant')
      .doc("4ZF95eWQzQKV6P")
      .update({
        dislike: decrement
      })
      setIsDislike(false)
    } else if (isDislike === false && isLike === true) {
      db.collection('restaurant')
      .doc("4ZF95eWQzQKV6P")
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
        <h1>Frontier</h1>
        <br></br>
        <img 
          src="images/cards-scp-frontier1.jpeg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "Frontier" && (
                <h2 key={res.id}>
                  {res.Faculty === "Science" ? (
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
            href='https://forewordcoffee.com/'
            target="_blank"
          >
          <h2>
            <h5>https://forewordcoffee.com/</h5>
          </h2>
          </a> */}
      </div>
      <h2>Chefs Wok</h2>
      <img 
          src="images/cards-scp-frontier-chefswok1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-chefswok1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Chicken Rice</h2>
      <img 
          src="images/cards-scp-frontier-chickenrice1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-chickenrice1.PNG" 
          class="menu"
        >
      </img>
      <h2>Chinese</h2>
      <img 
          src="images/cards-scp-frontier-chinese1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Drinks and Snacks</h2>
      <img 
          src="images/cards-scp-frontier-drinksandsnacks1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Fruits and Juices</h2>
      <img 
          src="images/cards-scp-frontier-fruitsandjuices1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-fruitsandjuices1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-fruitsandjuices2.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Indian</h2>
      <img 
          src="images/cards-scp-frontier-indian1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-indian1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Japanese</h2>
      <img 
          src="images/cards-scp-frontier-japanese1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-japanese1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Korean</h2>
      <img 
          src="images/cards-scp-frontier-korean1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-korean1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mala Hotpot</h2>
      <img 
          src="images/cards-scp-frontier-mala1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-mala1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mixed Vegetable Rice</h2>
      <img 
          src="images/menu-frontier-mixedvegetablerice1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Muslim</h2>
      <img 
          src="images/cards-scp-frontier-muslim1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-muslim1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Noodles</h2>
      <img 
          src="images/cards-scp-frontier-noodles1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-noodles1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Thai</h2>
      <img 
          src="images/cards-scp-frontier-thai1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-thai1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Vegetarian</h2>
      <img 
          src="images/cards-scp-frontier-vegetarian1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-vegetarian1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Western</h2>
      <img 
          src="images/cards-scp-frontier-western1.PNG" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-frontier-western1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Yong Tau Foo</h2>
      <img 
          src="images/cards-scp-frontier-yongtaufoo1.PNG" 
          class="menu"
        >
      </img>
      <br></br>
    </>
  )
}

export default Frontier;