import React, { useState } from 'react';
import imglink2 from '../Home-Img/about.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('Skills');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Skills':
        return (
          <ul>
            <li><span>Languages :-</span> Python,java, SQL, Spark SQL, Shell Scripting.</li>
            <li><span>Data Processing :-</span>Pandas, Apache Spark (PySpark), NumPy | Airflow, Kafka, dbt, Databricks DLT Pipelines, Cron</li>
            <li><span>Data Integration :-</span>PostgreSQL, BigQuery, Delta Lake, Apache Hive | Beautiful Soup, Scrapy, Requests, Regex</li>
            <li><span>Data Analytics :-</span>Excel, Tableau, Streamlit, Plotly, Matplotlib, Flask</li>
            <li><span>Cloud & DevOps :-</span>Git, Linux, Docker, CI/CD | Databricks, Azure (App Service, Azure Linux VM Compute)</li>
          </ul>

 
 


        );
      case 'Experience':
        return (
          <ul>
            <li><span>YAHSHUA SOFTWARE LTD. </span><br />SOFTWARE DEVELOPER </li>
            <li><span>REGO DIGITAL SOLUTIONS PVT LTD.   </span><br />SOFTWARE DEVELOPMENT INTERN </li>
          </ul>
        );
      case 'Education':
        return (
          <ul>
            <li><span>SPPU University</span><br />B.Tech in – Artificial Intelligence (2021-2024)<br/>CGPA: 8.65</li>
            <li><span>Government Polytechnic Aurangabad </span><br />Diploma – Computer Engineering (2018-2021)<br/>Percentage: 86.65% </li>
            
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
         
        </div>
      </section>
    </>
  );
};

export default About;
