import React , { useState } from 'react';
import './navbar.module.scss'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {RxDragHandleDots2} from 'react-icons/rx'
const Navbar = () => {
      const[active ,setActive]= useState('navBar')
      //Function to toggle navBar
      const showNav = ()=>{
        setActive('navBar activeNavBar')
      }


     const removeNavBar = ()=>{
      setActive('navBar')
     }

  return (
    <section className='navBarSection'>
      <header class name="header flex">
        <div className='logoDiv'>
          <a href="#" className="logo flex">
            <h1><SiYourtraveldottv className="icon"/>Travel.
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navlists flex">
            <li className='navItem'>
              <a href='#' className='navlink'>
                    Home
              </a></li>
              <li className='navItem'>
              <a href='#' className='navlink'>
                    Packages
              </a></li>
              <li className='navItem'>
              <a href='#' className='navlink'>
                    Shop
              </a></li>
              <li className='navItem'>
              <a href='#' className='navlink'>
                    About
              </a></li>

              <li className='navItem'>
              <a href='#' className='navlink'>
                    Pages
              </a></li>

              <li className='navItem'>
              <a href='#' className='navlink'>
                    News
              </a></li>

              <li className='navItem'>
              <a href='#' className='navlink'>
                    Contact
              </a></li>
              <button className='btn'>
                <a href="#">BOOK NOW</a>
              </button>
          </ul>
          <div onClick={removeNavBar}
              className='closeNavBar'>
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav}
        className="toggleNavBar">
          <RxDragHandleDots2 className="icon"/>
        </div>
      </header>
    </section>
  )
}

export default Navbar