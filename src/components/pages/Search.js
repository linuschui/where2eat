import React from 'react'
import SearchBar from '../SearchBar'
import "../SearchBar.css"
import resData from "../../data/allRestaurants.json";
import "./Search.css"

function Search() {
  return (
  <div className='search-container'>
    <SearchBar placeholder="find where2eat now !!" data={resData} />
  </div>
  )
}

export default Search