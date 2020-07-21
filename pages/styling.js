import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Container from '../components/container';

//Para aplicar estilos siempre importamos styles, y el archivo scss siempre debe
//contener "module"
import styles from '../styles/styling.module.scss';


const Styling = () => {

        //Main Hooks
    //Nombre del selector = useSelector(state = state.nombreDelReducer.NombreDelObjetoDentroDelStateDondeSeInyectaLaInfoNueva)
  const weatherSelector = useSelector(state => state.weatherInfo.weatherInformation);
  const oneSelector = useSelector(state => state.oneReducer.oneApi);

  let details = '';
  if(weatherSelector.name) {
      details =
      //Asi aplicamos los styles on Next.Js
        <div className={styles.mainContainer}>
            <h1>{weatherSelector.name}, {weatherSelector.sys.country}</h1>
            <h4>
                {Math.round(weatherSelector.main.temp)}°
            </h4>
            <h4>
                {weatherSelector.weather[0].description}
            </h4>
            <div className={styles.secondaryDiv}>
                <h5>Some details here</h5>
                <h6>Feels Like: {Math.round(weatherSelector.main.feels_like)} °C</h6>
                <h6>Humidity:  {weatherSelector.main.humidity}%</h6>
                <h6>Wind: {weatherSelector.wind.speed} km/h</h6>
                <h6>Clouds: {weatherSelector.clouds.all}%</h6>
                <h6>Pressure: {weatherSelector.main.pressure} hPa</h6>
            </div>

        </div>
  } else {
      details = 'no data to show'
  }

    return (
        <div>
            {/*Head es el titulo de la pagina en el browser */}
            <Head>
                <title>Next Project - Scss Style</title>
            </Head>
            <Container>
                <h1>Using scss (SASS)</h1>
                <p>This text has some style applied</p>
                {details}
            </Container>
        </div>
    )
}

export default Styling;
