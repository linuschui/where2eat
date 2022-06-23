import React from 'react'
import SearchBar from '../SearchBar'
import "../SearchBar.css"
import ShopData from "../Data.json"
import "./Search.css"

function Search() {
  return (
  <div className='search-container'>
    <SearchBar placeholder="find where2eat now !!" data={ShopData} />
  </div>
  )
}

export default Search