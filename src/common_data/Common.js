import React from 'react'
import Resume from '../assets/Tushar_Resume.pdf'

const Common = (props) => {
  return (
    <>
    <section id="header" className="d-flex align-items-center"> 
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
          <div className="col-md-6 pt-6 pt-lg-0 order-2 mt-5 order-lg-1 d-flex align-content-center flex-column">
            <h1>Hi, I'm</h1>
            <h1><strong className='brand-name'>Tushar Nishikant Sarode </strong></h1>
            <h4 className='my-3 blockquote-footer'>Data Scientist and Data Engineer</h4>
            <h6 className='lead'>{props.heading}</h6>
          <div className="mt-3">
          <a href={Resume} download="tusshar_resume" className="btn btn-outline-primary rounded-pill" target="_blank" rel="noreferrer">
            {props.btnText}
          </a>
          </div>
        </div>
          <div className='col-lg-6 order-1 order-lg-2 header-img '>
              <img src={props.src} alt="webdeveloper" className='img-fluid animated'/>
          </div>
        </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Common
