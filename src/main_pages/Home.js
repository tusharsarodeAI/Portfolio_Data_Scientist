import React from 'react'
import Common from '../common_data/Common'
import imglink1 from '../Home-Img/developer.jpg'

const Home = () => {
  return (
    <>
    <Common 
    heading='I like to craft solid and scalable frontend products with great user experiences.'
    btnText='Download CV'
    src={imglink1}
    />
    </>
  )
}

export default Home
