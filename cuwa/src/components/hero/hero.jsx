import React from 'react'
import "./hero.css"
import Image from 'next/image'
import Heroimg from "../../assets/heroimg.png"
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
              <p>CUWA - Where Every Customized Bottle<br/> Tells a Unique Brand Story.</p>
            </div>
            <div className="buttons">
              <button className="contact">Contact Us</button>
              <button className="whatsapp">WhatsApp Us</button>
            </div>
          </div>
        </div>
        <div className='right'>
          <Image className="heroimg" src={Heroimg}/>
        </div>
      </div>
    </div>
  )
}

export default hero
