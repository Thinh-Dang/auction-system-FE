import React from 'react'

const Navcontainer = () => {
  return (
    <nav className="navContainer">
        <ul className='flex gap-[6rem]'>
          <li className="navItem "><a href={APP_PATH.ROOT}>Home</a></li>
          <li className="navItem "><a href={APP_PATH.PRODUCTS}>Collections</a></li>
          <li className="navItem "><a href={APP_PATH.SELLPRODUCT}>Sell An Antique</a></li>
        </ul>
      </nav>
  )
}

export default Navcontainer