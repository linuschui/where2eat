import React from 'react'
import "./Restaurants.css"
import { RestaurantList } from "./RestaurantList"
import { useState } from 'react'
import RestaurantTable from './RestaurantTable'


function Restaurants() {
  const [query, setQuery] = useState("")
  console.log(RestaurantList.filter(restaurant=>restaurant.first_name.includes("fe")));
  const keys = ["first_name", "email"];
  const search = (data) =>{
    return data.filter(
      (item) => 
        keys.some((keys) => item[keys].toLowerCase().includes(query)
      ));
  };
  return (
    <div className="Restaurants">
      <input 
        type="text" 
        placeholder="search now !!" 
        className="search" 
        onChange={e=> setQuery(e.target.value)} 
      />
      <RestaurantTable data={search(RestaurantList)} />
    </div>
  )
}

export default Restaurants