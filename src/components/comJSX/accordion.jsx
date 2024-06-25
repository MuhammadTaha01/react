import Accordion from 'react-bootstrap/Accordion';
import '../comCSS/accordion.css'

function BasicExample() {
  return (
    <div className="accordion-container">
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>1. The Silent Exchange (Hackunia)</Accordion.Header>
            <Accordion.Body>
                A lone human scout, Captain Ramirez, crouched behind a pulsating rock formation on Hackunia, a planet bathed in an ethereal purple glow. 
                A colossal, six-legged creature with iridescent scales lumbered past, its every step shaking the ground. Fear battled with awe in Ramirez's 
                chest. Were these the Xylosians, the elusive guardians of Hackunia, rumored to possess unimaginable power? He held his breath, hoping his 
                rudimentary cloaking device held. After an agonizing minute, the creature passed, leaving Ramirez with a newfound respect for the alien world.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
            <Accordion.Header>2. The Whispering Crystals (Hackunia)</Accordion.Header>
            <Accordion.Body>
            Dr. Anya Petrova, a xenolinguist, stood mesmerized before a towering crystal formation on Hackunia. The crystals pulsed with a faint
             luminescence, emitting an otherworldly hum that resonated deep within her.  Intrigued, she touched a crystal, and a wave of information
              flooded her mind - images of a dying civilization, a desperate plea for help. Anya stumbled back, overwhelmed.  Hackunia wasn't just a planet;
               it was a sentient being, its crystals its voice. Now, she had a mission: decipher the plea and find a way to help.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
            <Accordion.Header>3. The Unexpected Alliance (Hackunia)</Accordion.Header>
            <Accordion.Body>
            Lieutenant Kai Tanaka surveyed the wreckage of his ship, his heart sinking. A malfunction had stranded him on Hackunia. Suddenly, a group
             of bipedal aliens with shimmering skin materialized before him. Kai braced for an attack, but instead, their leader extended a slender hand.
              Using a combination of gestures and salvaged tech, they established basic communication. The aliens, the Xylos, revealed they were studying
               the malfunction. Kai, in turn, shared knowledge of his technology.  An unlikely alliance was born, united by the need for survival and a
                newfound respect for each other's ingenuity.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
            <Accordion.Header>4. The Symphony of the Stars (Hackunia)</Accordion.Header>
            <Accordion.Body>
            Professor Singh, an astrophysicist, gazed at the magnificent night sky on Hackunia. Two moons cast an ethereal glow, while constellations
             unlike any he'd ever seen shimmered above.  As he adjusted his telescope, a mesmerizing melody filled the air. The sound emanated from the
              very stars themselves, a symphony of light and energy unlike anything he'd ever encountered. Singh realized Hackunia was not just a planet;
               it was a living conductor, orchestrating a celestial performance for those with ears to hear.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
            <Accordion.Header>5. The Forgotten City (Hackunia)</Accordion.Header>
            <Accordion.Body>
            Explorer Zara Khan trekked through the dense jungles of Hackunia, drawn by a faint metallic hum. Pushing aside vines, she stumbled upon a
             magnificent city, its buildings constructed from an unknown metal that shimmered in the dappled sunlight.  The city was eerily silent, 
             devoid of life.  Intrigued, Zara ventured deeper, her footsteps echoing in the deserted streets.  Hackunia held secrets, whispers of a
              civilization lost to time.  Zara vowed to unravel the mysteries of this forgotten city and the fate of its inhabitants.
            </Accordion.Body>
        </Accordion.Item>
        
        </Accordion>
    </div>
  );
}

export default BasicExample;