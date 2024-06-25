import React from 'react';
import Navbar from '../components/comJSX/navbar';
import Footer from '../components/comJSX/footer'
import MainHomePhoto from '../components/comJSX/textandimage'
import HumanWithDogs from '../images/humanswithdogs.jpg'
import Aliens from '../images/aliens1.jpg'
import MarsOnFire from '../images/marsonfire.jpg'
import Alert from '../components/comJSX/alert';
import ImagesInRow from '../components/comJSX/imagesinrow'
import CustomCarousel from '../components/comJSX/carousel'
import CarouselImage1 from '../images/planetsfire1.jpg'
import CarouselImage2 from '../images/planetsfire2.jpg'
import CarouselImage3 from '../images/planetsfire3.jpg'


const Home = () => {
  return (
    <div>
      <Navbar/>
      
      <MainHomePhoto/>
      
      <Alert 
      variant={"success"} 
      heading1={"How to save yourself and your loved ones?"} 
      message1={"Dear Citizens of Hackunia, In these trying times, it is paramount to remain vigilant and take the necessary precautions to protect ourselves and our loved ones from the alien invaders. The Hackunia Administration urges all citizens to stay indoors and keep all windows and doors securely locked. Create a safe room within your home equipped with essential supplies such as water, non-perishable food, medical kits, and communication devices. In case of an emergency, use the designated emergency signals and communication channels to reach out for help. Remember to keep a low profile and avoid attracting attention. Our defense forces are working tirelessly to fend off the invaders, and we need your cooperation to ensure everyone's safety. Stay strong, stay united, and together we will overcome this adversity."} 
      heading2={"Precautions to be followed when travelling -->"}
      message2={"Attention, Citizens of Hackunia, As we continue to navigate through these challenging times, it has come to our attention that the alien invaders have a notable fear of dogs. Therefore, we strongly advise you to keep dogs with you when moving outside. Our brave canine companions can help deter the aliens and provide an additional layer of protection. Ensure that your dogs are leashed and well-controlled to avoid any unnecessary risks. By taking this precaution, we can increase our chances of staying safe while moving about. Let's leverage this knowledge to our advantage and keep our community secure. Stay safe, stay alert, and trust in the resilience of Hackunia."}
      />
      
      <ImagesInRow image1={HumanWithDogs} image2={MarsOnFire} image3={Aliens}/>

      <CustomCarousel 
      image1={CarouselImage1}
      heading1={''}
      p1={''}

      image2={CarouselImage2}
      heading2={''}
      p2={''}

      image3={CarouselImage3}
      heading3={''}
      p3={''}
      />

      <Footer/>
    </div>
  );
};

export default Home;
