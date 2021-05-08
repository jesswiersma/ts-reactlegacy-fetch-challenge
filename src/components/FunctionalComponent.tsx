import React from 'react';
import Location from './ClassComponent';

const WeatherDisplay = () => {
    return (
        <div>
            <h2>Your Current Weather</h2>
            <div>Current weather at your location:</div>
            <Location/>
            <WeatherDisplay/>
        </div>
    )
}

export default WeatherDisplay;