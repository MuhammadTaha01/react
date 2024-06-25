import React from 'react';
import Image from 'react-bootstrap/Image';

function FluidExample({ image1, image2, image3 }) {
  const images = [image1, image2, image3];

  return (
    <div className="d-flex justify-content-around">
      {images.map((image, index) => (
        <div key={index} className="p-2">
          <Image src={image} width={300} height={300} fluid />
        </div>
      ))}
    </div>
  );
}

export default FluidExample;
