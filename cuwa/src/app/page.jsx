import React from 'react'
import "./page.css"
import Image from 'next/image'
import Hero from "../components/hero/hero"
import Contact from "../components/homecontact/homecontact"

import Featuresection from "../components/featuresection/featuresection"
const page = (props) => {
  return (
  <>
    
    <Hero/>
    <Featuresection/>
    <Contact/>
    
  </>
  
  )
}

export default page
