import React, {Component} from 'react';


export interface WeatherProps {}

export interface WeatherState {
    name: string;
    temp: number,
}

class Weather extends Component <WeatherProps, WeatherState> {
    constructor(props: WeatherProps) {
        super(props);

        this.state = {
            name: '',
            temp: 0,
        };
    }

    componentDidMount(){
        const geolocation = navigator.geolocation;
        
        geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;

            fetch(`https:api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=dd8805813ea4e3a03dc8b99d3a22fd47`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    name: data.name,
                    temp: data.main.temp,
                })
            })
        })
    }

    render(){
        return(
            <WeatherDisplay
            name = {this.state.name}
            temp = {this.state.temp}/>
        )
    }
}

export interface WeatherDisplayProps {
    name: string;
    temp: number;
}

const WeatherDisplay = (props: WeatherDisplayProps) => {
    return(
        <div>
            It is currently {props.temp}&deg;F in {props.name}
        </div>
    )
}

export default Weather;

// export type WeatherState = {
//     lon: number;
//     lat: number;
//     weather: string;
//     temp: number
// }

// class Location extends Component<{}, WeatherState> {
//     constructor(props: any) {
//         super(props)
//         this.state = {
//             lon: 0,
//             lat: 0,
//             weather: '',
//             temp: 0
//         }
//         console.log("hello")
//         console.log(props) //shows as {} in console because props is passed as {} in line 11, expands in console
//     }

//     myLocation(){
//         const geolocation = navigator.geolocation;

//         geolocation.getCurrentPosition((position) => {
//             console.log(position.coords)

//             this.setState ({
//                 lon: position.coords.longitude,
//                 lat: position.coords.latitude
//             })
//             console.log("this works?")

//             console.log(this.state.lon, this.state.lat) //not sure why this doesn't show in console
//         })
//     }    
    
//     fetchWeather(){
//         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=imperial&appid=dd8805813ea4e3a03dc8b99d3a22fd47`)
//         .then(res => res.json())
//           .then(data => {this.setState({
//              //temp: data.current.temp,
//              weather: data.current.weather[0].description})})
//            .catch(console.log)
//           return console.log(this.state.weather)
//     }

//     componentDidMount(){
//         this.fetchWeather()
//     }
//     render(){
//         return(
//             <div>
//                 <WeatherDisplay/>
//                 {/* <p>{this.state.WeatherState()}</p>     */}
//                 <p>{this.state.weather}</p>         
//             </div>
//         )
//     }
// }

// export default Location;




// handleChange(event: any) {
    //     window.location.reload();
    // }

    // componentDidMount() {
    //     //const apiKey =  "dd8805813ea4e3a03dc8b99d3a22fd47"
    
    //     navigator.geolocation.getCurrentPosition((position)=> {
    //         let lat: number = position.coords.latitude;
    //         let lon: number = position.coords.longitude;
    //         console.log("Lat:", position.coords.latitude);
    //         console.log("lon:", position.coords.longitude);
    
    //         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dd8805813ea4e3a03dc8b99d3a22fd47`)
    //         .then(response => response.json())
    //         .then((data: {current: {temp: number}}) => {
    //             console.log(data)
    //             this.setState({
    //                 temp: data.current.temp,
                    
    //             })
    //         }) 
    //         .catch(console.log)
    //     })
            
    // }
    