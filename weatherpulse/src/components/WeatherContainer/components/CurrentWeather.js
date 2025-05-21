import React from 'react';

/**
 * CurrentWeather Component
 * 
 * Displays the current weather conditions including:
 * - Temperature
 * - Weather condition
 * - Humidity, wind, etc.
 * - Weather icon
 * 
 * @returns {JSX.Element} The rendered CurrentWeather component
 */
const CurrentWeather = () => {
  // TODO: Integrate with weather data from parent component or context
  
  return (
    <div className="current-weather">
      <div className="weather-main">
        <div className="temperature-display">
          <span className="temperature">72°</span>
          <span className="unit">F</span>
        </div>
        
        <div className="weather-condition">
          <div className="condition-icon">
            {/* Placeholder for weather icon */}
            ☀️
          </div>
          <div className="condition-text">Sunny</div>
        </div>
      </div>
      
      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels like:</span>
          <span className="detail-value">75°F</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity:</span>
          <span className="detail-value">45%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind:</span>
          <span className="detail-value">8 mph</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">UV Index:</span>
          <span className="detail-value">6 (High)</span>
        </div>
      </div>

      <div className="last-updated">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default CurrentWeather;
