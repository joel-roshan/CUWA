import React from 'react'
import Image from 'next/image'
import "./page.css"
import Aboutimg from "../../assets/aboutimg.svg"
import Missionimg from "../../assets/missionimg.svg"
const page = () => {
  return (
    <div>
      <div className="about">
        <div className="left">
            <Image className="aboutimg1" src={Aboutimg} alt="about image"/>
        </div>
        <div className="right">
          <div className="rightcontainer">
            <h2 className='title'>About Us</h2>
            <p className='text'> At CUWA, where innovation meets hydration. We specialize in crafting premium custom water bottles, seamlessly blending unrivaled quality with a touch of elegance. With a commitment to excellence, each bottle is a canvas for your brand, ensuring a lasting impression. Our journey extends beyond just crafting containers; we create experiences. Whether it's for events, restaurants, hotels, or shops, our customised bottles become a unique expression of your brand, acting as mobile billboards that leave a lasting mark. We believe in the power of brand recall. Every sip is an opportunity to make your brand memorable in the daily lives of your audience. As we quench thirst, we also elevate your presence.Choose CUWA for premium appearance, unforgettable branding, and the seamless integration of your message into the daily rhythm of life. Elevate your brand with us, where each bottle tells a story of craftsmanship, style, and success.</p>
          </div>
        </div>
      </div>
      <div className="mission">
         <div className="left">
          <div className="leftcontainer">
         <h2 className='title'>Our Mission</h2>
         <p className="text">At CUWA, our mission is to redefine the essence of hydration by seamlessly fusing innovation, quality craftsmanship and timeless style. We specialize in the art of crafting premium custom water bottles that go beyond mere containers, serving as a powerful medium to elevate and showcase brands.Our dedication lies in providing a distinctive canvas for every client, ensuring their unique identity is not just displayed but celebrated. Each bottle, meticulously designed and customised, transforms into a mobile billboard, propelling brand messages far and wide.With an unwavering commitment to excellence, we aim to make every sip an unforgettable experience. At CUWA, we believe in leaving an indelible mark in the world of hydration and brand elevation. Join us in this journey where each bottle tells a story of innovation, quality, and a seamless blend of style and substance.</p>
         </div>
        </div>
        <div className="right">
            <Image src={Missionimg} className='aboutimg2' alt="about image"/>
        </div>
      </div>
    </div>
  )
}

export default page
