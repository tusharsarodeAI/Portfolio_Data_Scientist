import React from 'react'
import { Link } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
    <section id="header" className="d-flex align-items-center"> 
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
          <div className="col-md-6 pt-6 pt-lg-0 order-2 mt-5 order-lg-1 d-flex align-content-center flex-column">
            <h1>Hi, I'am</h1>
            <h1><strong className='brand-name'>Shrikant</strong></h1>
            <h4 className='my-3 blockquote-footer'>Web Developer</h4>
            <h6 className='lead'>{props.heading}</h6>
          <div className="mt-3">
              <Link to={props.visit} className='btn btn-outline-primary rounded-pill'>{props.btnText}</Link>
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
