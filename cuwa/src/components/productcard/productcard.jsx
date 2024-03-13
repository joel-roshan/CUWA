import React from 'react'
import "./productcard.css"
const productcard = (props) => {
  return (
    <div className='productcard'>
        <p className="capacity">{props.capacity}</p>
        <p className="name">{props.name}</p>
    </div>
  )
}

export default productcard
