import React from 'react';
import Navbar from '../components/comJSX/navbar';
import Footer from '../components/comJSX/footer'
import CapturedAreasInfo from '../components/comJSX/capturedAreasInfo.jsx'

const CapturedAreas = () => {
  return (
    <div>
      <Navbar/>
      <CapturedAreasInfo/>
      <Footer/>
    </div>
  );
};

export default CapturedAreas;
