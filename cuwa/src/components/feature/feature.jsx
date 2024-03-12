import React from 'react'
import "./feature.css"
import Image from 'next/image'
const feature = (props) => {
  return (
  <div className='main'>
    
    <div className="cardbody">
      <Image className="icon" src={props.img}/>
      <h2 className="cardtitle">{props.title}</h2>
      <p className="cardcontent">{props.content}</p>
    </div>
    
  </div>
  
  )
}

export default feature
