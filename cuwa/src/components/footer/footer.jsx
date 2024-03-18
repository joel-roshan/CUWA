import React from 'react'
import Image from 'next/image'
import './footer.css'
import Cuwalogo from "../../assets/cuwalogowhite.svg"
import { BsTwitterX } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
const footer = () => {
  return (
    <div className='footer'>
      <div className="footerlogo">
        <a href="/"><Image className="logo" src={Cuwalogo} alt="cuwalogo"/></a>
      </div>
      <div className="socials">
        <p className='follow'>Follow us on</p>
        <div className="icons">
        <a target="_blank" href="https://www.facebook.com/profile.php?id=61557335401483&is_tour_dismissed=true"><CiFacebook size={20}/></a>
        <a target="_blank" href="https://www.instagram.com/cuwa.in?igsh=YjUxZG9keGdmaXd1"><FaInstagram /></a>
        <a target="_blank" href="https://twitter.com/cuwaindia"><BsTwitterX /></a>
        <a target="_blank" href="https://www.linkedin.com/in/cuwa-in-4806542ba/"><CiLinkedin size={20}/></a>
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
