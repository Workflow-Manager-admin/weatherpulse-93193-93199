import React from 'react';
import './App.css';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">☀️</span> WeatherPulse
            </div>
            <button className="btn">Login</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">Real-time Weather Information</div>
            
            <h1 className="title">WeatherPulse</h1>
            
            <div className="description">
              Your personalized weather companion with real-time updates, forecasts, and insights.
            </div>
          </div>
          
          {/* Weather Container Component */}
          <WeatherContainer />
        </div>
      </main>
    </div>
  );
}

export default App;