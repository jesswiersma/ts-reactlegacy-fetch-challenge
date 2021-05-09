import React, {Component}  from 'react';
import WeatherDisplay from './FunctionalComponent';

type Location = {
    lon: number;
    lat: number;
    weather: string;
    temp: number,
    name: string
}

class CurrentWeather extends Component <{}, Location> {
    constructor(props: any) {
        super(props);
        this.state = {
            lon: 0,
            lat: 0,
            weather:'',
            temp: 0,
            name: ''
        }
        console.log(props)  //finally displaying in console!
    }

    myLocation(){

        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos.coords)

            this.setState({
                lon: pos.coords.longitude,
                lat: pos.coords.latitude
            })
            console.log(this.state.lon, this.state.lat) //woohoo! still in console!

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=imperial&appid=2e8501cace9daf23ce27952c0f6e0235`)
            .then(res => res.json())
            .then(data =>{this.setState({weather: data.weather[0].description, temp: data.main.temp, name: data.name})})
            .catch(console.log)
        })
    }

        componentDidMount() {
            this.myLocation()
        }
        render(){
            return(
                <div>
                    <WeatherDisplay weather={this.state.weather} temp={this.state.temp} name={this.state.name}/>
                </div>
            )
        }
    
    }

    export default CurrentWeather;