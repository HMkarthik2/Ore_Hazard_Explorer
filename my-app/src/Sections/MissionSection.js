import React from 'react';
import roverImage from '../images/div2image.jpg'; // Adjust the path to the image

const MissionSection = () => {
  return (
    <section className="mission-section">
      <h2 className="mission-heading">
        <span className="mission-highlight1">MISSION </span>
        <span className="mission-highlight2">OF THE PROJECT</span>
      </h2>
      <hr />
      <div className="mission-content">
        <img src={roverImage} alt="Rover" className="mission-image" />
        <p>
          The mission of the Ore Hazard Explorer project is to develop an autonomous, IoT-enabled rover capable of detecting hazardous gases in underground environments, ensuring the safety of miners and explorers. By providing real-time monitoring and early warnings of toxic gas leaks, the project aims to prevent accidents, reduce risks, and protect lives in mining, cave exploration, and other high-risk industries.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
