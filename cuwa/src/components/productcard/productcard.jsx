import React from 'react'
import "./productcard.css"
import Image from 'next/image'
const productcard = (props) => {
  return (
    <div className='productcard'>
        <div className="productimg"><Image className="productimg" src={props.img} priorityxq/></div>
        <p className="name">{props.name}</p>
        <p className="capacity">{props.capacity}</p>

    </div>
  )
}

export default productcard
