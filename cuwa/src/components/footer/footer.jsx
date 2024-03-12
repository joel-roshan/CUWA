import React from 'react'
import Image from 'next/image'
import './footer.css'
import Cuwalogo from "../../assets/cuwalogowhite.svg"
import { BsTwitterX } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
const footer = () => {
  return (
    <div className='footer'>
      <div className="footerlogo">
        <Image className="logo" src={Cuwalogo} alt="cuwalogo"/>
      </div>
      <div className="socials">
        <p className='follow'>Follow us on</p>
        <div className="icons">
        <CiFacebook size={20}/>
        <FaInstagram />
        <BsTwitterX />
        </div>
        </div>
        <div className="address">
            <p className="addtittle">
                Office Address
            </p>
            <p className="addy">
                Thriuvankulam,<br />Kochi, Kerala <br />Pincode 682305
            </p>
        </div>
        <div className="footer-contact">
            <p className="contactitile">Contact</p>
            <p className="deets">Email id:  salescuwa@gmail.com <br />Mobile: +91 95440 84244</p>
        </div>
      </div>
    
  )
}

export default footer
