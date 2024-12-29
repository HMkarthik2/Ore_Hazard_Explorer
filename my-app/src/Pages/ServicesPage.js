import React, { useState, useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import "../CSS/ServicesPage.css"; // Import the CSS file

const ServicesPage = () => {
  const [gasLevel1, setGasLevel1] = useState(0);
  const [gasLevel2, setGasLevel2] = useState(0);
  const [gasLevel3, setGasLevel3] = useState(0);

  const apiUrl1 =
    "https://blynk.cloud/external/api/get?token=xZvQKS2yfFqdfkFP4G_qeWl8PrFfpf9B&V0";
  const apiUrl2 =
    "https://blynk.cloud/external/api/get?token=xZvQKS2yfFqdfkFP4G_qeWl8PrFfpf9B&V1";
  const apiUrl3 =
    "https://blynk.cloud/external/api/get?token=xZvQKS2yfFqdfkFP4G_qeWl8PrFfpf9B&V2";

  useEffect(() => {
    const fetchGasData = async (url, setGasLevel) => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        const gasValue = parseFloat(text);
        setGasLevel(gasValue);
      } catch (error) {
        console.error("Error fetching gas data:", error);
      }
    };

    // Fetch data for all APIs every 5 seconds
    fetchGasData(apiUrl1, setGasLevel1);
    fetchGasData(apiUrl2, setGasLevel2);
    fetchGasData(apiUrl3, setGasLevel3);

    const interval = setInterval(() => {
      fetchGasData(apiUrl1, setGasLevel1);
      fetchGasData(apiUrl2, setGasLevel2);
      fetchGasData(apiUrl3, setGasLevel3);
    }, 5000);

    return () => clearInterval(interval);
  }, [apiUrl1, apiUrl2, apiUrl3]);

  return (
    <div className="services-page-container">
      <h2 className="services-title">Services Page</h2>
      <p className="services-description">
        Details about the services provided by Ore Hazard Explorer.
      </p>

      <div className="speedometers-container">
        {/* Speedometer 1 */}
        <div className="speedometer-box">
          <h3>Carbon Monoxide</h3>
          <ReactSpeedometer
            value={gasLevel1}
            minValue={0}
            maxValue={100}
            needleColor="red"
            startColor="green"
            endColor="red"
            segments={10}
            currentValueText={`Percentage: ${gasLevel1}%`}
            height={200}
          />
        </div>

        {/* Speedometer 2 */}
        <div className="speedometer-box">
          <h3>Hydrogen Sulphide</h3>
          <ReactSpeedometer
            value={gasLevel2}
            minValue={0}
            maxValue={100}
            needleColor="red"
            startColor="blue"
            endColor="orange"
            segments={10}
            currentValueText={`Percentage: ${gasLevel2}%`}
            height={200}
          />
        </div>

        {/* Speedometer 3 */}
        <div className="speedometer-box">
          <h3>Methane</h3>
          <ReactSpeedometer
            value={gasLevel3}
            minValue={0}
            maxValue={100}
            needleColor="red"
            startColor="purple"
            endColor="yellow"
            segments={10}
            currentValueText={`Percentage: ${gasLevel3}%`}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
