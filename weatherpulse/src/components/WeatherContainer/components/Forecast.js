import React from 'react';

/**
 * Forecast Component
 * 
 * Displays a multi-day weather forecast with:
 * - Day of the week
 * - Weather condition icon
 * - High and low temperatures
 * - Precipitation chance
 * 
 * @returns {JSX.Element} The rendered Forecast component
 */
const Forecast = () => {
  // TODO: Replace with real forecast data from API
  const forecastData = [
    { day: 'Mon', condition: '☀️', high: 75, low: 62, precipitation: 0 },
    { day: 'Tue', condition: '⛅', high: 73, low: 64, precipitation: 10 },
    { day: 'Wed', condition: '🌧️', high: 68, low: 60, precipitation: 80 },
    { day: 'Thu', condition: '🌧️', high: 65, low: 58, precipitation: 90 },
    { day: 'Fri', condition: '⛅', high: 70, low: 60, precipitation: 20 },
    { day: 'Sat', condition: '☀️', high: 74, low: 63, precipitation: 0 },
    { day: 'Sun', condition: '☀️', high: 77, low: 65, precipitation: 0 },
  ];
  
  return (
    <div className="forecast">
      <div className="forecast-list">
        {forecastData.map((day, index) => (
          <div key={index} className="forecast-day">
            <div className="day-name">{day.day}</div>
            <div className="day-condition">{day.condition}</div>
            <div className="day-temps">
              <span className="temp-high">{day.high}°</span>
              <span className="temp-low">{day.low}°</span>
            </div>
            <div className="precipitation">
              <span className="precip-icon">💧</span>
              <span className="precip-value">{day.precipitation}%</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="forecast-note">
        <p>Forecast data is for demonstration purposes only.</p>
        {/* TODO: Add UI controls for changing forecast view (daily/hourly) */}
      </div>
    </div>
  );
};

export default Forecast;
