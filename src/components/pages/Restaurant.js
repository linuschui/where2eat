import firebase from "../../fire";
import React, { useState , useEffect } from 'react'
import RestaurantTable from './RestaurantTable';
import "./Restaurants.css"

function Restaurant() {

  const ref = firebase.firestore().collection("restaurant");
  console.log(ref);

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const [query, setQuery] = useState("")
  const keys = ["Name", "Faculty"];
  const search = (data) =>{
    return data.filter(
      (item) => 
        keys.some((keys) => item[keys].toLowerCase().includes(query)
      ));
  };

  function getData() {
    setLoader(true);
    ref.orderBy('id', 'asc')
       .onSnapshot((querySnapshot) => {
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
    <div className="Restaurants">
      <input 
        type="text" 
        placeholder="find whr2eat now !!" 
        className="search" 
        onChange={e=> setQuery(e.target.value)} 
      />
      <h5>UTown | YIH | Music | USC</h5>
      <h5>PGPR | Business | Medicne | Computing</h5>
      <h5>Science | Engineering | FASS | Law</h5>
      <RestaurantTable data={search(data)} />
    </div> 
  )
}

export default Restaurant;