import React from 'react';
import '../CSS/SafetyMeasuresPage.css'; // Import the CSS file

const SafetyMeasuresPage = () => {
  return (
    <div className="safety-measures-page">
      
      {/* Background Section */}
      <section className="background-section">
        <div className="text-content">
          <h2> <span className="Blue"> Safe Concentration </span> Levels of Gases in Air</h2>
          <ul className="gas-levels">
            <li> <span className='Bold'>Methane (CH<sub>4</sub>):</span> Safe below 5% (50,000 ppm) to avoid explosive risks.</li>
            <li> <span className='Bold'>Hydrogen Sulfide (H<sub>2</sub>S):</span> Safe below 20 ppm; anything over 100 ppm is life-threatening.</li>
            <li> <span className='Bold'>Carbon Monoxide (CO):</span> Safe below 50 ppm; hazardous effects begin at 200 ppm, with life-threatening risks above 400 ppm.</li>
          </ul>
        </div>
      </section>

      {/* Safety Measures Section */}
      <section className="safety-section">
    <h2 className="safety-heading">Safety Measures</h2>

  {/* Methane Section */}
  <div className="methane-section">
    <h3 className="methane-heading">Methane (CH<sub>4</sub>) Safety Measures</h3>
    <ul className="methane-points">
      <li><span className='Bold'>Ensure Proper Ventilation:</span> Methane displaces oxygen and can build up in poorly ventilated areas, increasing the risk of asphyxiation and explosion. Ensure good air circulation in confined spaces.</li>
      <li><span className='Bold'>Explosion-Proof Equipment:</span> Use equipment that is explosion-proof and certified for methane-prone environments to avoid ignition.</li>
      <li><span className='Bold'>Regular Monitoring:</span> Install gas detectors that continuously monitor methane levels, alerting workers when concentrations approach dangerous levels (5% Lower Explosive Limit).</li>
      <li><span className='Bold'>No Open Flames:</span> Avoid open flames or sparks in areas where methane could accumulate. Methane is highly flammable.</li>
    </ul>
  </div>

  {/* Hydrogen Sulfide Section */}
  <div className="h2s-section">
    <h3 className="h2s-heading">Hydrogen Sulfide (H<sub>2</sub>S) Safety Measures</h3>
    <ul className="h2s-points">
      <li><span className='Bold'>Continuous Gas Monitoring:</span> Use fixed or portable H₂S detectors to continuously monitor gas levels, especially in confined spaces or during excavation work.</li>
      <li><span className='Bold'>Personal Protective Equipment (PPE):</span> Workers should use respirators or supplied air when concentrations exceed safe levels. Eye protection is also recommended, as H₂S can cause irritation.</li>
      <li><span className='Bold'>Evacuation Protocols:</span> If H₂S levels exceed 100 ppm (Immediate Danger to Life or Health - IDLH), evacuate the area immediately and follow emergency response protocols.</li>
      <li><span className='Bold'>Ventilation Systems:</span> Ensure proper ventilation in areas where H₂S is likely to accumulate to prevent high concentrations.</li>
      <li><span className='Bold'>Buddy System:</span> Implement a buddy system where workers in hazardous zones always work in pairs, ensuring someone can assist in an emergency.</li>
      <li><span className='Bold'>Emergency Oxygen:</span> Have oxygen or other breathing assistance available in case of exposure.</li>
    </ul>
  </div>

  {/* Carbon Monoxide Section */}
  <div className="co-section">
    <h3 className="co-heading">Carbon Monoxide (CO) Safety Measures</h3>
    <ul className="co-points">
      <li><span className='Bold'>CO Detectors: </span>Install carbon monoxide detectors with alarms in areas where CO buildup is possible, such as industrial sites, garages, or enclosed spaces.</li>
      <li><span className='Bold'>Proper Ventilation: </span>Ensure proper ventilation in enclosed or semi-enclosed spaces where CO-producing machinery, such as engines or heaters, is used.</li>
      <li><span className='Bold'>Shut Down Engines Indoors: </span>Never run gasoline-powered engines or generators indoors, as CO can build up to dangerous levels quickly.</li>
      <li><span className='Bold'>PPE and Respiratory Protection:</span> Workers should use respiratory protection when exposed to environments with potentially high CO levels. Masks or air-supplied respirators may be necessary.</li>
      <li><span className='Bold'>Emergency Response Plan:</span> Develop and train workers on an emergency response plan for CO poisoning, including immediate evacuation and provision of fresh air or oxygen.</li>
      <li><span className='Bold'>Regular Equipment Maintenance:</span> Ensure regular maintenance of combustion engines and machinery to minimize CO emissions.</li>
    </ul>
  </div>

  {/* General Safety Section */}
  <div className="general-section">
    <h3 className="general-heading">General Safety Measures for All Gases</h3>
    <ul className="general-points">
      <li><span className='Bold'>Training and Awareness:</span> All personnel should be trained to identify gas hazards, understand gas detector usage, and follow emergency protocols.</li>
      <li><span className='Bold'>Emergency Exits:</span> Ensure that escape routes and exits are clearly marked and free of obstructions in case of a gas leak.</li>
      <li><span className='Bold'>Regular Inspections:</span> Conduct regular inspections of equipment, ventilation systems, and gas detectors to ensure proper functioning.</li>
      <li><span className='Bold'>Evacuation Plans:</span> Have clear evacuation procedures in place, and regularly conduct drills to ensure workers can respond quickly to gas leaks or alarm signals.</li>
      <li><span className='Bold'>Personal Gas Monitors:</span> Equip workers in high-risk areas with personal gas detectors to monitor air quality and receive real-time alerts.</li>
    </ul>
  </div>
</section>

      
    </div>
  );
};

export default SafetyMeasuresPage;
