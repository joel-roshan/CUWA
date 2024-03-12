"use client"
import React from 'react'
import Image from 'next/image'
import styles from './navbar.module.css'
import Logo from "../../assets/cuwalogo.png"
import {useState} from 'react'
import Ham from "../../assets/hamburger.png"
import Close from "../../assets/close.png"
const Navbar = () => {
const [nav, setNav] = useState(false)
const toggleNav  = () => {
  setNav(!nav)
}
  return (
    <div className={styles.main}>
        <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.logocontainer}>
            <Image className={styles.logo} src={Logo} alt="Cuwa"/>
          </div>
          
        </div>
        <div className={styles.right}>
          <div className={styles.link}>
            <a href="/">Home</a>
          </div>
          <div className={styles.link}>
            <a href="/about">About Us</a>
          </div>
          <div className={styles.link}>
            <a href="/products">Products</a>
          </div>
          <div className={styles.link}>
            <a href="/contact">Contact</a>
          </div>
          
        </div>
      </div>
      
      </div>
      <div className={styles.mobnav}>
        <div className={styles.holder}>
          <div className={styles.imgcontainer}>
            <Image className={styles.moblogo} src={Logo} alt="CUWA"/>
          </div>
          <div className={styles.ham}>
            {!nav&&<button className={styles.hambtn} onClick={toggleNav}>
              <Image src={Ham} alt="hamburger"/>  
            </button>}
            {nav&&<button className={styles.hambtn} onClick={toggleNav}>
              <Image src={Close} alt="close"/>  
            </button>}
          </div>
        </div>
        {nav && <div className={styles.links}>
          
        <div className={styles.moblink}>
            <a href="/">Home</a>
          </div>

          <div className={styles.moblink}>
            <a href="/about">About Us</a>
          </div>
          <div className={styles.moblink}>
            <a href="/products">Products</a>
          </div>
          <div className={styles.moblink}>
            <a href="/contact">Contact Us</a>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Navbar

