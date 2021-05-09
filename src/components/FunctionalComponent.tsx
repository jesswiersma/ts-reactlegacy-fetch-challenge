import React from 'react';

type MyProps = {
    weather: string
}

const WeatherDisplay = (props: MyProps) => {
    return(
        <div>
            <h1>Current Weather</h1>
            <p>The current weather for your location is:</p>
            <p>{props.weather}</p>
        </div>
    )
}

export default WeatherDisplay;