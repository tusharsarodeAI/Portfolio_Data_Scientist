import React from 'react';

const Card = (props) => {
  return (
    <>
              <div className="col-md-4 col-sm-6 col-12 mx-auto pb-5">
                <div className="card h-100 pb-3" style = {{'width': '100%', 'border': '1px solid #adadb1'}}>
                  <img src={props.src} className="card-img-top" alt="project_1"/>
                    <div className="card-body">
                      <h5 className="card-title">{props.title}</h5>
                      <p className="card-text">{props.description}</p>
                    </div>
                    <div className="btn">
                      <a href={props.visit} className="btn btn-primary" target='_blank' rel="noreferrer">View Project</a>
                    </div>
                </div> 
              </div>
    </>
  )
}

export default Card
