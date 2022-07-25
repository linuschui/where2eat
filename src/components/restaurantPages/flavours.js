import React, { useState , useEffect } from 'react'
import firebase from "../../fire";
import './images.css';

function Flavours() {

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
        <h1>Flavours @ UTown</h1>
        <br></br>
        <img 
          src="images/cards-utn-flavours1.jpg" 
          class="logo"
        >
        </img>
        <br></br> 
          {data.map(
            res => 
              res.Name == "Flavours @ UTown" && (
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
            href='https://flash-coffee.com/sg/'
            target="_blank"
          >
          <h2>
            <h5>https://flash-coffee.com/sg/</h5>
          </h2>
          </a> */}
      </div>
      <h2>Beverages</h2>
      <img 
          src="images/menu-flavours-beverages.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Dim Sum</h2>
      <img 
          src="images/menu-flavours-dimsum.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mixed Veg Rice</h2>
      <img 
          src="images/menu-flavours-mixedvegrice.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Noodles</h2>
      <img 
          src="images/menu-flavours-noodles1.jpg" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-flavours-noodles2.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mala Hot Pot</h2>
      <img 
          src="images/menu-flavours-malahotpot1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-flavours-malahotpot2.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Taiwanese</h2>
      <img 
          src="images/menu-flavours-taiwanese2.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Japanese</h2>
      <img 
          src="images/menu-flavours-jap1.jpg" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-flavours-jap2.jpg" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Mini Wok</h2>
      <img 
          src="images/menu-flavours-miniwok1.png" 
          class="menu"
        >
      </img>
      <img 
          src="images/menu-flavours-miniwok2.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Chicken Rice</h2>
      <img 
          src="images/menu-flavours-chickenrice.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Yong Tau Foo</h2>
      <img 
          src="images/menu-flavours-yongtaufoo.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Western Food</h2>
      <img 
          src="images/menu-flavours-western.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Gong Cha</h2>
      <img 
          src="images/menu-flavours-gongcha.png" 
          class="menu"
        >
      </img>
      <br></br>
      <h2>Coconut Queen</h2>
      <img 
          src="images/menu-flavours-coconutqueen.png" 
          class="menu"
        >
      </img>
    </>
  )
}

export default Flavours;