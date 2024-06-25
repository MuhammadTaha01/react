import React from 'react'
import Navbar from '../components/comJSX/navbar'
import Footer from '../components/comJSX/footer'
import CustomAccordion from '../components/comJSX/accordion'
import CustomCarousel from '../components/comJSX/carousel'
import img1 from '../images/aliens1.jpg'
import img2 from '../images/aliens2.jpg'
import img3 from '../images/aliens3.jpg'
import CapturedAreasInfo from '../components/comJSX/capturedAreasInfo'
import ZonesInfo from '../components/comJSX/zoneInfoTable'

const aboutus = () => {
  return (
    <div>
      <Navbar/>

      <CustomAccordion/>
      
      <CustomCarousel 
      image1={img1} 
      heading1={'NeoHaven'} 
      p1={'Status - Destroyed'} 
      image2={img2} 
      heading2={'Fallspring'} 
      p2={'Status - No signs of humanity here'}
      image3={img3}
      heading3={'Rotaksika'}
      p3={'40% chances of life'} />

      <h3>Captured Areas Information</h3>
      <CapturedAreasInfo/>
      
      <h3> SafeZone Areas Information</h3>
      <ZonesInfo/>

      <Footer/>
    </div>
  )
}

export default aboutus