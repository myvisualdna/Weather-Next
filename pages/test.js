import React, { useState } from "react";
import { useSelector } from "react-redux";
import { userRouter } from "next/router";
import absoluteUrl from "next-absolute-url";
import Head from "next/head";
import Container from "../components/container";
import styles from "../styles/index.module.scss";

const Test = () => {

  //1. Defining selectors for Redux-state
  const weatherSelector = useSelector(
    (state) => state.weatherInfo.weatherInformation
  );
  const oneSelector = useSelector((state) => state.oneReducer.oneApi);

  //2. Defining temp units
  let unitImperial = " °C";
  if (weatherSelector.imperial === true) {
    unitImperial = " °F";
  } else {
  }

  //3. Defining functions for weekdays
  function getWeekDay(date) {
    //Create an array containing each day, starting with Sunday.
    var weekdays = new Array(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    );
    //Use the getDay() method to get the day.
    var day = date.getDay();
    //Return the element that corresponds to that index.
    return weekdays[day];
  }

  var date = new Date();
  var weekDay = getWeekDay(date);


  var dayOne = new Date();
  dayOne.setDate(dayOne.getDate() + 1);
  var One = getWeekDay(dayOne);

  var dayTwo = new Date();
  dayTwo.setDate(dayTwo.getDate() + 2);
  var Two = getWeekDay(dayTwo);

  var dayThree = new Date();
  dayThree.setDate(dayThree.getDate() + 3);
  var Three = getWeekDay(dayThree);

  var dayFour = new Date();
  dayFour.setDate(dayFour.getDate() + 4);
  var Four = getWeekDay(dayFour);

  var dayFive = new Date();
  dayFive.setDate(dayFive.getDate() + 5);
  var Five = getWeekDay(dayFive);


 //4. Defining main UI components using redux-state selectors
  let details = "";
  if (oneSelector.current) {
    let weatherIconOne = `http://openweathermap.org/img/wn/${oneSelector.daily[0].weather[0].icon}.png`;
    let weatherIconTwo = `http://openweathermap.org/img/wn/${oneSelector.daily[1].weather[0].icon}.png`;
    let weatherIconThree = `http://openweathermap.org/img/wn/${oneSelector.daily[2].weather[0].icon}.png`;
    let weatherIconFour = `http://openweathermap.org/img/wn/${oneSelector.daily[3].weather[0].icon}.png`;
    let weatherIconFive = `http://openweathermap.org/img/wn/${oneSelector.daily[4].weather[0].icon}.png`;
    details = (
      <div>
        <div className={styles.divWeather}>
          <div>
            <h1>
              {weatherSelector.name}, {weatherSelector.sys.country}
            </h1>
          </div>

          <div className={styles.boxDetails}>
            <h2>{weekDay}</h2>
            <h3>
              {Math.round(weatherSelector.main.temp)} {unitImperial},{" "}
              {weatherSelector.weather[0].description}
            </h3>
          </div>
        </div>
        <div className={styles.boxOrder}>
          <div className={styles.box}>
            <h2>{One}</h2>
            <img className={styles.iconStyle} src={weatherIconOne} alt="" />
            <p>
              Feels Like: {Math.round(oneSelector.daily[0].feels_like.day)}
              {unitImperial}
            </p>
            <p>
              Temp. Min: {Math.round(oneSelector.daily[0].temp.min)}{" "}
              {unitImperial}
            </p>
            <p>
              Temp. Max: {Math.round(oneSelector.daily[0].temp.max)}{" "}
              {unitImperial}
            </p>
            <p>Conditions: {oneSelector.daily[0].weather[0].description}</p>
          </div>

          <div className={styles.box}>
            <h2>{Two}</h2>
            <img className={styles.iconStyle} src={weatherIconOne} alt="" />
            <p>
              Feels Like: {Math.round(oneSelector.daily[1].feels_like.day)}{" "}
              {unitImperial}
            </p>
            <p>
              Temp. Min: {Math.round(oneSelector.daily[1].temp.min)}{" "}
              {unitImperial}
            </p>
            <p>
              Temp. Max: {Math.round(oneSelector.daily[1].temp.max)}{" "}
              {unitImperial}
            </p>
            <p>Conditions: {oneSelector.daily[1].weather[0].description}</p>
          </div>

          <div className={styles.box}>
            <h2>{Three}</h2>
            <img className={styles.iconStyle} src={weatherIconOne} alt="" />
            <p>
              Feels Like: {Math.round(oneSelector.daily[2].feels_like.day)}{" "}
              {unitImperial}
            </p>
            <p>
              Temp. Min: {Math.round(oneSelector.daily[2].temp.min)}{" "}
              {unitImperial}
            </p>
            <p>
              Temp. Max: {Math.round(oneSelector.daily[2].temp.max)}{" "}
              {unitImperial}
            </p>
            <p>Conditions: {oneSelector.daily[2].weather[0].description}</p>
          </div>

          <div className={styles.box}>
            <h2>{Four}</h2>
            <img className={styles.iconStyle} src={weatherIconOne} alt="" />
            <p>
              Feels Like: {Math.round(oneSelector.daily[3].feels_like.day)}{" "}
              {unitImperial}
            </p>
            <p>
              Temp. Min: {Math.round(oneSelector.daily[3].temp.min)}{" "}
              {unitImperial}
            </p>
            <p>
              Temp. Max: {Math.round(oneSelector.daily[3].temp.max)}{" "}
              {unitImperial}
            </p>
            <p>Conditions: {oneSelector.daily[3].weather[0].description}</p>
          </div>

          <div className={styles.box}>
            <h2>{Five}</h2>
            <img className={styles.iconStyle} src={weatherIconOne} alt="" />
            <p>
              Feels Like: {Math.round(oneSelector.daily[4].feels_like.day)}{" "}
              {unitImperial}
            </p>
            <p>
              Temp. Min: {Math.round(oneSelector.daily[4].temp.min)}{" "}
              {unitImperial}
            </p>
            <p>
              Temp. Max: {Math.round(oneSelector.daily[4].temp.max)}{" "}
              {unitImperial}
            </p>
            <p>Conditions: {oneSelector.daily[4].weather[0].description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    details = "Loading...";
  }

  return (
    <div>
      {/*Head es el titulo de la pagina en el browser */}
      <Head>
        <title>Daily Weather</title>
      </Head>
      <Container>{details}</Container>
    </div>
  );
};

export default Test;
