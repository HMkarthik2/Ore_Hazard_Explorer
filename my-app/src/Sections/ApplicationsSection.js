import React from 'react';
import applicationimage from '../images/ApplicationSection_image.png'


const ApplicationsSection = () => {
  return (
    <section className="applications-section">
      <h2 className="applications-heading">
        <span className="applications-highlight1">APPLICATIONS</span>
      </h2>
      <hr />
      <div className="applications-content">
        <div className="applications-image-container">
          <img src={applicationimage} alt="Applications" className="applications-image" />
        </div>
        <div className="applications-heading-text">
          <p>Practical applications of the Ore Hazard Explorer:</p>
          <ul>
            <li>Ensuring the safety of miners and cave explorers</li>
            <li>Detecting harmful gases in different environments</li>
            <li>Potential future applications (e.g., industrial use, safety monitoring)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
