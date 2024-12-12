import React, { useState } from 'react';
import Card from '../common_data/Card';
import Project_data from '../api/Project_data';

const AllProjects = () => {
  const [item, setItem] = useState(Project_data);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCard = (cateCard) => {
    setActiveFilter(cateCard);
    const updatedCard = cateCard === 'all' ? Project_data : Project_data.filter((curElement) => curElement.type === cateCard);
    setItem(updatedCard);
  };

  return (
    <>
      <div className="container-xxl py-6 pt-5" id="project">
        <div className="container">
          <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <ul className="list-group">
                <h1>My projects</h1>
              </ul>
            </div>
           
          </div>
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  {item.map((showCard) => {
                    const { id, imgsrc, title, description, visit, type } = showCard;
                    return (
                      <Card
                        key={id}
                        src={imgsrc}
                        title={title}
                        description={description}
                        visit={visit}
                        type={type}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-3">
        <a href="https://github.com/tusharsarodeAI" target='_blank' rel="noreferrer" className="btn social-btn github-btn">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/tushar-sarode02/" target="_blank" rel="noreferrer" className="btn social-btn linkedin-btn">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://www.instagram.com/tushar_s.45/" target="_blank" rel="noreferrer" className="btn social-btn instagram-btn">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>
    </>
  );
};

export default AllProjects;
