import React from 'react'
import Common from '../common_data/Common'
import imglink2 from '../Home-Img/about.jpg'

const About = () => {
  return (
    <>
     <Common 
    heading='Meet the Creative Mind Behind the Portfolio: Exploring Shrikant Journey'
    visit='/contact'
    btnText='Contact Me'
    src={imglink2}
    />
       <div class="text-center pb-3">
            <a href="https://github.com/Shrikantj0794" target='_' class="btn social-btn github-btn">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/shrikant-jamale-18146a209/" target='_' class="btn social-btn linkedin-btn">
                <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://www.instagram.com/shrikantj0794/" target='_' class="btn social-btn instagram-btn">
                <i class="fab fa-instagram"></i> Instagram
            </a>
        </div>
    </>
  )
}

export default About
