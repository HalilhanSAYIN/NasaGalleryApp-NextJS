import React from 'react'
import {AboutComponent} from '@/components/AboutComponent/AboutComponent' 
function About() {

  const aboutDescription = `The National Aeronautics and Space Administration (NASA) is a federal agency established by the United States on July 29, 1958. It focuses on space exploration, aviation, and the development of space technologies. NASA’s primary mission is to enhance humanity’s capacity to explore space and understand the mysteries of the universe.
  In 1969, NASA achieved worldwide prestige by sending humans to the Moon with the Apollo program. During the Apollo 11 mission, Neil Armstrong and Buzz Aldrin became the first humans to set foot on the Moon. This milestone marked the beginning of a new era in space exploration.
  NASA has undertaken numerous significant projects, including Mars exploration, the Hubble Space Telescope, the International Space Station (ISS), and various deep space missions. Mars exploration vehicles are gathering crucial data about the Red Planet and preparing for future human missions to Mars.
  NASA’s vision is to push humanity to new frontiers and improve the quality of life on Earth. Through scientific research, technological innovations, and international collaborations, NASA continues to lead in space exploration.`

  return (
    <AboutComponent
    title={"NASA"}
    description={aboutDescription}
      imageUrl="https://www.nasa.gov/wp-content/uploads/2022/08/jsc2022e046413_orig.jpg"> 
       
    </AboutComponent>
  )
}

export default About

