import React from 'react'
import Common from '../common_data/Common'
import imglink1 from '../Home-Img/developer.jpg'
import About from './About'
import Contact from './Contact'
import AllProjects from './Projects'

const Home = () => {
  return (
    <>
    <Common 
    heading="Results-driven Data Engineer with a strong foundation in designing, developing, and optimizing scalable data pipelines and systems. Skilled in data modeling, ETL processes, and implementing big data solutions to support business intelligence and analytics. Proficient in technologies like Python, SQL, Apache Spark, Hadoop, and cloud platforms such as AWS and Azure."
    btnText='Download CV'
    src={imglink1}
    />
    <About/>
    <AllProjects/>
    <Contact/>
    </>
  )
}

export default Home
