import React from 'react'
import Navbar from '../components/comJSX/navbar'
import Footer from '../components/comJSX/footer'
import ZoneInfoTable from '../components/comJSX/zoneInfoTable'

const DestroyedAreas = () => {
  return (
    <div>
      <Navbar/>
      <h2>Destroyed Areas</h2>
      <ZoneInfoTable/>
      <Footer/>
    </div>
  )
}

export default DestroyedAreas