import React, { useState } from 'react';
import imglink2 from '../Home-Img/about.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('Skills');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Skills':
        return (
          <ul>
            <li><span>UI/UX</span><br />Designing web/app interfaces.</li>
            <li><span>Frontend Development</span><br />Building responsive websites.</li>
            <li><span>Backend Development</span><br />Creating server-side logic.</li>
          </ul>
        );
      case 'Experience':
        return (
          <ul>
            <li><span>Phi Design Experience Pvt. Ltd</span><br />web developer (Jun 2023-Nov 2023)</li>
          </ul>
        );
      case 'Education':
        return (
          <ul>
            <li><span>SPPU University</span><br />B.Tech in Information Technology (2020-2024)<br/>CGPA: 8.06</li>
            <li><span>HSC</span><br />Higher Secondary (2019-2020)<br/>Percentile: 79.08</li>
            <li><span>SSC</span><br />Secondary Education(2017-2018)<br/>Percentile: 76.40</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section id="about-header" >
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row margine">
                {/* Text Content */}
                <div className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex  flex-column">
                  <div className='text-title'>
                  <h1>Hi, I'm</h1>
                  <h1><strong className='brand-name'>Shrikant</strong></h1>
                  <h6 className='lead'>My name is Shrikant Ganesh Jamale. I am originally from Beed but now live in Pune. I recently completed my B.Tech degree in Information Technology. My passion lies in web development, and I am eager to create innovative and user-friendly websites.</h6>
                  </div>
                  <div className="tab-title">
                    <p
                      className={`tab-links ${activeTab === 'Skills' ? 'active-link' : ''}`}
                      onClick={() => setActiveTab('Skills')}
                    >
                      Skills
                    </p>
                    <p
                      className={`tab-links ${activeTab === 'Experience' ? 'active-link' : ''}`}
                      onClick={() => setActiveTab('Experience')}
                    >
                      Experience
                    </p>
                    <p
                      className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`}
                      onClick={() => setActiveTab('Education')}
                    >
                      Education
                    </p>
                  </div>
                  <div className="tab-contents active-tab">
                    {renderTabContent()}
                  </div>
                </div>
                {/* Image Content */}
                <div className='col-lg-6 order-1 order-lg-2 about-img'>
                  <img src={imglink2} alt="webdeveloper" className='img-fluid animated' />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center social-div">
            <a href="https://github.com/Shrikantj0794" target='_blank' rel="noreferrer" className="btn social-btn github-btn">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/shrikant-jamale-18146a209/" target='_blank' rel="noreferrer" className="btn social-btn linkedin-btn">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://www.instagram.com/shrikantj0794/" target='_blank' rel="noreferrer" className="btn social-btn instagram-btn">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
