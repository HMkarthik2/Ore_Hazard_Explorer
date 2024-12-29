import React from 'react';

const OverviewSection = () => {
  return (
    <section className="overview-section">
      <div className="overlay-text">
        <h2>Overview of Project</h2>
        <p>
          The <span className='highlight'>Ore Hazard Explorer</span> is an autonomous rover designed to enhance the safety of miners and cave explorers by detecting hazardous gases like methane, carbon monoxide, and hydrogen sulfide. Utilizing IoT technology, it navigates challenging terrains while providing real-time feedback on gas levels. This early detection system helps prevent accidents from toxic gas leaks, ensuring a safer environment for workers in underground industries.
        </p>
      </div>
    </section>
  );
};

export default OverviewSection;
