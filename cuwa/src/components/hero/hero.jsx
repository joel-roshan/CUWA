import React from 'react'
import "./hero.css"
import Image from 'next/image'
import Heroimg from "../../assets/heroimg.png"
import Mobhero from "../../assets/mobimg.jpg"
const hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='left'>
          <div className="leftcontainer">
            <div className="title">
              CRAFTING <span className="blue">EXCELLENCE,</span><br/>QUENCHING <span className="blue">THIRST:</span>
            </div>
            <div className="contents">
              <p>CUWA - Where Every Customised Bottle<br/> Tells a Unique Brand Story.</p>
            </div>
            <div className="buttons">
              <a href="/contact"><button className="contact">Contact Us</button></a>
              <a href="https://wa.me/919544084244"target="_blank"><button className="whatsapp">WhatsApp Us</button></a>
            </div>
          </div>
        </div>
        <div className='right'>
          <Image className="heroimg" src={Heroimg}/>
          <div className="mobimg"><Image src={Mobhero}/></div>

        </div>
      </div>
    </div>
  )
}

export default hero
