// "use client"
// import React from 'react'
// import Image from 'next/image'
// import styles from './navbar.module.css'
// import Logo from "../../assets/cuwalogo.png"
// import {useState} from 'react'
// import Ham from "../../assets/hamburger.png"
// import Close from "../../assets/close.png"
// const Navbar = () => {
// const [nav, setNav] = useState(false)
// const toggleNav  = () => {
//   setNav(!nav)
// }
//   return (
//     <div className={styles.main}>
//         <div className={styles.container}>
//       <div className={styles.nav}>
//         <div className={styles.left}>
//           <div className={styles.logocontainer}>
//             <a href="/"><Image className={styles.logo} src={Logo} alt="Cuwa"/></a>
//           </div>
          
//         </div>
//         <div className={styles.right}>
//           <div className={styles.link}>
//             <a href="/">Home</a>
//           </div>
//           <div className={styles.link}>
//             <a href="/about">About Us</a>
//           </div>
//           <div className={styles.link}>
//             <a href="/products">Products</a>
//           </div>
//           <div className={styles.link}>
//             <a href="/contact">Contact</a>
//           </div>
          
//         </div>
//       </div>
      
//       </div>
//       <div className={styles.mobnav}>
//         <div className={styles.holder}>
//           <div className={styles.imgcontainer}>
//             <Image className={styles.moblogo} src={Logo} alt="CUWA"/>
//           </div>
//           <div className={styles.ham}>
//             {!nav&&<button className={styles.hambtn} onClick={toggleNav}>
//               <Image src={Ham} alt="hamburger"/>  
//             </button>}
//             {nav&&<button className={styles.hambtn} onClick={toggleNav}>
//               <Image src={Close} alt="close"/>  
//             </button>}
//           </div>
//         </div>
//         {nav && <div className={styles.links}>
          
//         <div className={styles.moblink}>
//             <a href="/">Home</a>
//           </div>

//           <div className={styles.moblink}>
//             <a href="/about">About Us</a>
//           </div>
//           <div className={styles.moblink}>
//             <a href="/products">Products</a>
//           </div>
//           <div className={styles.moblink}>
//             <a href="/contact">Contact Us</a>
//           </div>
//         </div>}
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import "./navbar.css"
import Navlogo from "../../assets/cuwalogo.png"
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      {/* <div className="navbody">
        <div className="navcontainer">
       <img className="navlogo"src={Navlogo} alt="" />
        <div className="navlinks">
          <a className="linktext" href="">HOME</a>
          <a className="linktext" href="">ABOUT</a>
          <a className="linktext" href="">SPEAKERS</a>
          <a className="linktext" href="">REGISTRATION</a>
          <a className="linktext" href="">SPONSERS</a>
          <a className="linktext" href="">FAQ</a>
          <a className="linktext" href="">CONTACT</a>
        </div>
        <button className='navbtn'>Get ticket</button>
      </div>
      </div> */}
       <section className="top-nav">
    <div>
    <a href="/"><Image className="navlogo"src={Navlogo} alt="" /></a>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li><a
      href='/'
      >
      
      
      
      
      HOME</a></li>



      <li><a
      href="/about"

      
      >ABOUT</a></li>
      {/* <li>SPEAKERS</li> */}


      <li><a
      href='products'

      
      >PRODUCTS</a></li>



      <li><a
      href="/contact"
      >CONTACT</a></li>
      
    </ul>
  </section>

    </div>
  )
}

export default Navbar