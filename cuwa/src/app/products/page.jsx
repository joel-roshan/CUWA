import React from 'react'
import "./page.css"
import Productcard from "../../components/productcard/productcard"
import Ocean from "../../assets/ocean1.svg"
const page = () => {
  return (
    <div className='main'>
        <h2 className='title'>Our Products</h2>
        <div className="container">
        <Productcard
          capacity="1 L"
          name="OCEAN"
        />
        <Productcard
          capacity="1 L"
          name="DELIGHT"
        />  
        <Productcard
        capacity="1 L"
        name="HULK"
        />
        <Productcard
          capacity="500 mL"
          name="FORSTY"
        />
        <Productcard
        capacity="500 mL"
        name="DELIGHT HANDY"
        />

        <Productcard
        capacity="300 mL"
        name="FORSTY DWARF"
        />

        <Productcard
          capacity="300 mL"
          name="CHILL SIP"
        />

        
        </div>
    </div>
  )
}

export default page
