import React from 'react'
import '../Styles/search.css'
import {HiSearch} from 'react-icons/hi';

function Search() {
  return (
    <div className='search'>
      <div className='search-bar'>
        <div id='search-icon'>
          <HiSearch/>
        </div>
        <input type='text' placeholder="Search"/>
      </div>
    </div>
  )
}

export default Search
