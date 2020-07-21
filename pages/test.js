import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Container from '../components/container';

//timestamp converter
function convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
        ampm = 'AM',
        time;
  
    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh == 0) {
        h = 12;
    }
  
    // ie: 2014-03-24, 3:00 PM
    time = h + ':' + min + ' ' + ampm;
    return time;
  }
  
  
  

const Test = () => {

    //Main Hooks
    //Nombre del selector = useSelector(state = state.nombreDelReducer.NombreDelObjetoDentroDelStateDondeSeInyectaLaInfoNueva)
  const weatherSelector = useSelector(state => state.weatherInfo.weatherInformation);
  const oneSelector = useSelector(state => state.oneReducer.oneApi);

    //TimeStamps
    let timeSunrise = '';
    let timeSunset = '';
    if(oneSelector.hourly) {
        timeSunrise = oneSelector.current.sunrise;
        timeSunset = oneSelector.current.sunset;
    } else {
      timeSunrise = 'no data'
    }
    
    //timestamp used
    let convertedSunrise = convertTimestamp(timeSunrise)
    let convertedSunset = convertTimestamp(timeSunset)

let details = "";
if(oneSelector.current) {
    details = 
    <div>
        <h1>{weatherSelector.name}, {weatherSelector.sys.country}</h1>
        <h4>
            {Math.round(weatherSelector.main.temp)}°
        </h4>
        <h4>
            {weatherSelector.weather[0].description}
         </h4>
        <h6>Feels Like: {Math.round(weatherSelector.main.feels_like)} °C</h6>
        <h6>Humidity:  {weatherSelector.main.humidity}%</h6>
        <h6>Wind: {weatherSelector.wind.speed} km/h</h6>
        <h6>Clouds: {weatherSelector.clouds.all}%</h6>
        <h6>Sunrise: {convertedSunrise}</h6>
        <h6>Sunset: {convertedSunset}</h6>
        <h6>Pressure: {weatherSelector.main.pressure} hPa</h6>
    </div>
} else {
    details = "no data"
}


    return (
        <div>
            {/*Head es el titulo de la pagina en el browser */}
            <Head>
                <title>Next Project - Test</title>
            </Head>
            <Container>
                <h1>Test</h1>
                <h6>{details}</h6>
                


            </Container>
        </div>
    )
}

export default Test;
