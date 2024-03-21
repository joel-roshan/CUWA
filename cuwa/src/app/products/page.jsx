import React from 'react'
import "./page.css"
import Productcard from "../../components/productcard/productcard"
import Oceanimg from "../../assets/ocean1.svg"
import Delightimg from "../../assets/DELIGHT.jpg"
import Hulkimg from "../../assets/HULK.jpg"
import Forstyimg from "../../assets/FORSTY.jpg"
import Chillsipimg from "../../assets/CHILL SIP.jpg"
import Forstydwarfimg from "../../assets/FORSTY DWARF.jpg"
import Delighthandyimg from "../../assets/HANDY DELIGHT.jpg"
const page = () => {
  return (
    <div className='main'>
        <h2 className='title'>Our Products</h2>
        <div className="container">
        <Productcard
          img={Oceanimg}
          capacity="1 L"
          name="OCEAN"
        />
        <Productcard
          img={Delightimg}
          capacity="1 L"
          name="DELIGHT"
        />  
        <Productcard
        img={Hulkimg}
        capacity="1 L"
        name="HULK"
        />
        <Productcard
          img={Forstyimg}
          capacity="500 mL"
          name="FORSTY"
        />
        <Productcard
        img={Delighthandyimg}
        capacity="500 mL"
        name="DELIGHT HANDY"
        />

        <Productcard
        img={Forstydwarfimg}
        capacity="300 mL"
        name="FORSTY DWARF"
        />

        <Productcard
          img={Chillsipimg}
          capacity="300 mL"
          name="CHILL SIP"
        />

        
        </div>
    </div>
  )
}

export default page
