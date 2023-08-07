import React from 'react'

function Searchbar() {
  return (
    <div className='search'>
        <h2>Search Item</h2>
        <input type="text" className='searchbar' placeholder={'Apple Watch, Samsung S21, Macbook Pro, ...'}/>
    </div>
  )
}

export default Searchbar