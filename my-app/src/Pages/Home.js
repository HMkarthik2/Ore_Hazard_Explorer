import React from 'react';
import OverviewSection from '../Sections/OverviewSection';
import MissionSection from '../Sections/MissionSection';
import ApplicationsSection from '../Sections/ApplicationsSection';
import FooterSection from '../Sections/FooterSection';
const HomePage = () => {
  return (
    <div>
      <OverviewSection />
      <MissionSection />
      <ApplicationsSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;