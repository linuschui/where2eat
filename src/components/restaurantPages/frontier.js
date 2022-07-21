import React from 'react'
import resData from "../../data/allRestaurants.json";
import './images.css'

function frontier() {
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
          {resData.map(
            res => 
              res.Name == "Frontier" && (
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

export default frontier;