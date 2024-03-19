import React from 'react'
import "./homecontact.css"

const homecontact = () => {
  return (
    <div className='contactmain'>
      <div className="contact-container">
        <div className="heading">
            <h2 className="heading">Sip with <span>Purpose,</span></h2>
            <h2 className="heading">Sip with <span>flair.</span></h2>
        </div>
        <div className="content">
        CUWA, a haven for premium customised water bottles that transcend the ordinary. At the heart of our business is a commitment to craftsmanship, as we meticulously craft each bottle to embody the essence of your brand. <br /><br />
          
          In a world where every detail matters, our personalized water bottles stand as a testament to your unique identity. Whether for grand events, trendy restaurants, luxurious hotels, or chic shops, our bottles not only carry refreshment but also bear the mark of your distinctive brand.
        </div>
        
            <a href="/contact"><button className="contactbtn">Contact Us</button></a>
        
      </div>
    </div>
  )
}

export default homecontact
