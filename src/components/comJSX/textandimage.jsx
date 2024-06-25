import React from 'react'
import '../comCSS/textandimage.css'
import DestroyedPlanet from '../../images/planetsDestroyed.jpg'
import { Link } from 'react-router-dom'

const textandimage = () => {
  return (
    <div className='wrapper'>
        <div className="text-section">
            <h2>Hackunia Planet - Under Attack</h2>
            <p>One night, as the inhabitants of Hackunia slept peacefully under the twin moons, a fleet of alien ships descended from the sky. 
               These invaders, with their advanced weaponry and ruthless tactics, unleashed chaos upon the planet. Buildings crumbled, forests burned, 
               and the once vibrant cities were reduced to ruins. The aliens showed no mercy, capturing or annihilating everything in their path. 
               The resilient Hackunians fought bravely, but the alien onslaught left Hackunia in ruins, a haunting reminder of the devastating attack.</p>
            <button className='btn'> <Link to={'/Contact-Hackunia'} className='no-underline'> Contact Hackunia's Administration 🚀 </Link></button>
        </div>

        <div className="image-section">
            <img src={DestroyedPlanet} 
            alt="Planet" 
            width={500}
            height={500} />
        </div>
    
    </div>
  )
}

export default textandimage