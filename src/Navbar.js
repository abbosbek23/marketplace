import React from 'react'
import logoHome from './logoHome.svg'
import Hamburger from './Hamburger.svg'
import Markets from './Icon.svg'
import Bag from './Bag.svg'
import Exit from './Exit.svg'
function Navbar() {
  return (
    <div className='Navbar'>
        {/* <div className='LogoMain'>
        <ul>
            <li><a href="#"></a><img src={logoHome} alt=""/></li>
            <li><a><img src={Hamburger} alt=""/></a></li>
            <li><a><img src={Markets} alt="" /></a></li>
            <li><a><img src={Bag} alt="" /></a></li>
        </ul>
        </div>
        <div className='Bottom-logo'>
          <a href="" className='Bottom-'><img src={Exit} alt="" /></a>
        </div> */}
        <nav className='sidebar'>
          <header>
            <div className='image-text'>
            <span className='image'>
              <li className='nav-logo'>
              <img src={logoHome} alt="logo" />
              </li>
            </span> 
            </div>
          </header>


          <div className='menu-bar'>
           <div className='menu'>
             <li className='nav-link'>
              <a href="#"><img className='icon' src={Hamburger} alt="hamburger" /></a>
             </li>
             <li>
             <a href="#"><img className='icon logos' src={Markets} alt="hamburger" /></a>
             </li>
             <li>
             <a href="#"><img className='icon logos' src={Bag} alt="hamburger" /></a>
             </li>
           </div>

           <div className='bottom-icon'>
            <li className='bottom-logo'>
              <a href=""><img className='icon bottom-logos' src={Exit} alt="" /></a>
            </li>
           </div>
          </div>

        </nav>
    </div>
  )
}

export default Navbar