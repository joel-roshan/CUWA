import React from 'react'
import "./page.css"
const page = () => {
  return (
    <div className='contact-main'>
      <div className="left">
        <div className="container">
          <h2 className="contact-title">Contact Us:</h2>
          <p className="contact-text">Feel free to contact us anytime. We will get back to you as soon as we can</p>
          <div className="input-container">

            <label htmlFor="name">Your name</label>
            <input type="text" id="name" className="input"/>

            <label htmlFor="number">Your Contact number</label>
            <input type="text" id="number" className="input"/>

            <label htmlFor="email">Your Email</label>
            <input type="text" id="email" className="input"/>

            <label htmlFor="message">Your Message (optional)</label>
            <input type="text" id="message" className="input"/>

            <div className="btn-holder"> <button className="btn">Submit</button></div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="container1">
            <p className='text'>Pouring happiness<br/>
            into every bottle.<br/>
            <span className="blue">Customize </span>
             your<br/>
            bliss!!!
            </p>
        </div>
      </div>
    </div>
  )
}

export default page
