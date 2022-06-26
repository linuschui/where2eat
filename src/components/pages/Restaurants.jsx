import React from 'react'
import "./Restaurants.css"
import { RestaurantList } from "./RestaurantList"
import { useState } from 'react'
import RestaurantTable from './RestaurantTable'
import { Link } from 'react-router-dom'


function Restaurants() {
  const [query, setQuery] = useState("")
  const keys = ["Name", "Location"];
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
        placeholder="find whr2eat now !!" 
        className="search" 
        onChange={e=> setQuery(e.target.value)} 
      />
      <h5>UTown | YIH | Music | USC</h5>
      <h5>PGPR | Business | Medicne | Computing</h5>
      <h5>Science | Engineering | FASS | Law</h5>
      <RestaurantTable data={search(RestaurantList)}>
        <Link to={keys.Website} />
      </RestaurantTable> 
    </div>
  )
}

export default Restaurants