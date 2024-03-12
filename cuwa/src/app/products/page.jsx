import React from 'react'
import "./page.css"
import Productcard from "../../components/productcard/productcard"
const page = () => {
  return (
    <div className='main'>
        <h2 className='title'>Products</h2>
        <div className="container">
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>

        <Productcard/>

        <Productcard/>

        
        </div>
    </div>
  )
}

export default page
