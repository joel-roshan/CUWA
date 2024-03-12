import React from 'react'
import "./featuresection.css"
import Heart from "../../assets/heart.png"
import Ad from "../../assets/ad.png"
import Sparkle from "../../assets/sparkle.png"
import Bottle from "../../assets/bottle.png"
import Feature from "../feature/feature"
const featuresection = () => {
  return (
  <>
    
    <div className="featurescontainer">
      <Feature img={Sparkle} title="Unrivaled Quality" content="Immerse yourself in a world of excellence with our custom water bottles. Our commitment to unrivaled quality ensures that every sip is an experience of pure craftsmanship, setting your brand apart with a touch of sophistication.
"/>
      <Feature img={Heart} title="Premium Appearance" content="Elevate your brand with our custom water bottles, where premium appearance meets functional design. Our bottles aren't just containers; they're a statement of style, ensuring your brand stands out with a touch of elegance and sophistication."/>
      <Feature img={Bottle} title="Brand Recall" content="Make your brand unforgettable daily. Our custom water bottles turn every sip into a memorable experience, ensuring your presence lingers in the minds of your audience.


"/>
      <Feature img={Ad} title="Mobile Billboard" content="Transform your brand into a moving masterpiece with our custom water bottles. More than hydration, they act as mobile billboards, carrying your message wherever they go – an impactful blend of utility and advertising brilliance.
"/>

    </div>
  </>
  
  )
}

export default featuresection
