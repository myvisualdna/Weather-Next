import React from "react";
import Head from "next/head";
import Container from "../components/container";
import styles from "../styles/index.module.scss";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Next Project - Home</title>
      </Head>
      <Container>
        <h1 className={styles.head}>WORK IN PROGRESS</h1>
        <h3 className={styles.subheader}>Hi there, this is a Weather app</h3>
        <p className={styles.paragraph}>
          (100% logic working + Visual in progress)
        </p>
        <p>
          This weather app was completely developed on Next.js using server side
          rendering (SSR). I have also used Next's router to browse the app.
        </p>
        <p>
          I created a custom Redux store completely integrated to Next.js server
          for state management. Packages like: "next-redux-wrapper",
          "redux-devtools-extension", "redux-thunk" did a great job{" "}
        </p>
        <p>
          I have also added Axios.js to make multiple and simoultaneus http
          requests and fetch data from OpenWeather API (you can use the find
          imput and see the results on the console (I promise a visual solution
          in the short term).
        </p>

        <p className={styles.lastHeader}>
          Try searching your City and check the results on the console (for the
          time being, visual solutions are coming!).
        </p>
      </Container>
    </div>
  );
};

export default Index;
