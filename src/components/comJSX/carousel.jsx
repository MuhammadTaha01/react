import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample({image1,image2,image3,heading1,heading2,heading3,p1,p2,p3}) 
{
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={image1} 
        alt="" 
        srcset="" />
        <Carousel.Caption>
          <h3>{'NeoHeaven'}</h3>
          <p>{'This city is also being destroyed by the aliens'}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={image2} 
        alt=""/>
        <Carousel.Caption>
          <h3>{'NovaPort'}</h3>
          <p>{'Alines had burnt and have used chemicals bombs on it'}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} 
        alt="" />
        <Carousel.Caption>
          <h3>{'Starfall'}</h3>
          <p>{'Aliens have used tactic chemicals on it'}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;