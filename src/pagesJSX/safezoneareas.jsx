import React from 'react'
import Navbar from '../components/comJSX/navbar'
import Footer from '../components/comJSX/footer'
import ZoneInfoTable from '../components/comJSX/zoneInfoTable'


const SafeZonedAreas = () => {
  return (
    <div>
      <Navbar/>
      <h2> Safe-Zone Areas</h2>
      <ZoneInfoTable/>
      <Footer/>
    </div>
  )
}

export default SafeZonedAreas