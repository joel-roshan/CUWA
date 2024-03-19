import React from 'react'
import "./productcard.css"
import Image from 'next/image'
import Productimg from "../../assets/ocean1.svg"
const productcard = (props) => {
  return (
    <div className='productcard'>
        <div className="productimg"><Image className="productimg" src={Productimg} priority/></div>
        <p className="name">{props.name}</p>
        <p className="capacity">{props.capacity}</p>

    </div>
  )
}

export default productcard
