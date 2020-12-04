import React from "react";
import Head from "next/head";
import Container from "../components/container";
import styles from "../styles/index.module.scss";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Weather App - Home</title>
      </Head>
      <Container>
        <h1 className={styles.head}>Weather App</h1>
        <h3 className={styles.subheader}>Server-Side Rendering on Next.js</h3>
        <p className={styles.paraText}>
          This weather app was completely developed on Next.js using server side
          rendering (SSR). I have also used Next's router to browse the app. I
          created a custom Redux store completely integrated to Next.js server
          for state management. Packages like: "next-redux-wrapper",
          "redux-devtools-extension", "redux-thunk" did a great job. I have also
          added Axios.js to make multiple and simoultaneus http requests and
          fetch data from OpenWeather API.
        </p>

        <p className={styles.paraText}>
          Try searching your City and check out the results.
        </p>
        <h5>Technologies:</h5>
        <ul className={styles.listStyle}>
          <li>React</li>
          <li>Next.js</li>
          <li>Redux</li>
          <li>Redux Toolkit</li>
          <li>Redux-thunk</li>
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>Axios</li>
          <li>OpenWeather API</li>
        </ul>
      </Container>
    </div>
  );
};

export default Index;
