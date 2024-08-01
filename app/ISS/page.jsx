import React from 'react'
import {AboutComponent} from '@/components/AboutComponent/AboutComponent' 

function ISS() {
    const issDescription = `
The International Space Station (ISS) is a large spacecraft that orbits Earth at an average altitude of approximately 400 kilometers (250 miles). It serves as a unique laboratory and living space where astronauts from various countries conduct scientific research and experiments in a microgravity environment. The ISS is a joint project involving space agencies from the United States (NASA), Russia (Roscosmos), Europe (ESA), Japan (JAXA), and Canada (CSA).

Launched in 1998, the ISS has been continuously inhabited since November 2000. It is composed of multiple interconnected modules and components, including laboratories, living quarters, and solar arrays that provide power to the station. The ISS orbits Earth approximately every 90 minutes, completing about 16 orbits per day.

The primary objectives of the ISS include advancing scientific knowledge in fields such as biology, physics, astronomy, and meteorology. Researchers on the ISS conduct experiments that cannot be performed on Earth, contributing to our understanding of fundamental scientific principles and the effects of long-duration spaceflight on the human body.

The ISS also serves as a platform for international collaboration and technology development, paving the way for future space exploration missions. It supports a variety of space agencies and research institutions, fostering global cooperation in space science and exploration.

The station's mission is to advance human knowledge, improve life on Earth, and prepare for future exploration beyond low Earth orbit.
`;
  return (
    <div>
      <AboutComponent
    title={"ISS"}
    description={issDescription}
      imageUrl="https://www.nasa.gov/wp-content/uploads/2023/02/International-Space-Station-in-2021.jpg"
      > 
       
    </AboutComponent>
    </div>
  )
}

export default ISS
