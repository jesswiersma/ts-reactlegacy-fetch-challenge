import React, {Component} from 'react';
import WeatherDisplay from './FunctionalComponent';

interface Weather {
    lon: number;
    lat: number;
    temp: number;
}

class Location extends Component<{},Weather> {
    constructor(props: any) {
        super(props)
        this.state = {
            temp: 0,
            lat: 0,
            lon: 0,
        }
    }
    

    // handleChange(event: any) {
    //     window.location.reload();
    // }

    componentDidMount() {
        const apiKey =  "dd8805813ea4e3a03dc8b99d3a22fd47"

        navigator.geolocation.getCurrentPosition((position)=> {
            let lat: number = position.coords.latitude;
            let lon: number = position.coords.longitude;
            console.log("Lat:", position.coords.latitude);
            console.log("lon:", position.coords.longitude);

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
            .then(response => response.json())
            .then((data => console.log(data)))
        })
            
    }

    render(){
        return(
            <div>
                <h2>The current temperature for your location is: {`${this.state.temp}F`} </h2>
                <WeatherDisplay/>
            </div>
        )
    }
}

export default Location;