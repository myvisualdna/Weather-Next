import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FetchOneAsync from "../redux/actions/firstFetch";
import FetchOneAsyncImperial from "../redux/actions/firstImperial";
import Link from "next/link";
import styles from "../styles/styling.module.scss";
import axios from "axios";

const Switch = ({ celsius, handleToggle }) => {
  return (
    <>
      <input
        checked={celsius}
        onChange={ToggleUnit}
        className={styles.react_switch_checkbox}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: celsius && "#06D6A0" }}
        className={styles.react_switch_label}
        htmlFor={`react-switch-new`}
      >
        <span className={styles.react_switch_button} />
      </label>
    </>
  );
};

const Navigation = () => {
  const myAPI = "ba5bdbde96da5e11cab5be14c6342e0f";

  const Switch = ({ isOn, handleToggle }) => {
    return (
      <>
        <input
          checked={isOn}
          onChange={ToggleUnit}
          className={styles.react_switch_checkbox}
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          style={{ background: isOn && "#06D6A0" }}
          className={styles.react_switch_label}
          htmlFor={`react-switch-new`}
        >
          <span className={styles.react_switch_button} />
        </label>
      </>
    );
  };

  const [celsius, setCelsius] = useState(true);

  //3. HOOKS
  //Para fijar el parametro default para la accion
  //Es la funcion usada para el dispatch pasandole un valor
  //por default (en este caso Buenos Aires)
  //UseEffect es componentDidMount
  useEffect(() => {
    const request = axios
      .get(
        `http://api.ipapi.com/check?access_key=${myAPI}&format=1`
      )
      .then((response) => getOneAsync(response.data.city));
  }, []);

  //2. Creamos el metodo que se va a disparar cuando subirmos
  //algo a traves del input (2)
  const getWeatherInfo = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city === "") {
      console.log("no city to search");
    } else {
      //Llamamos al creador de acciones conectado (3)
    }
    if (celsius === true) {
      getOneAsync(city);
    } else {
      getOneAsyncImperial(city);
    }
  };

  const ToggleUnit = () => {
    setCelsius(!celsius);
  };
  let theUnit = "°C";
  if (celsius === true) {
    theUnit === "°C";
  } else {
    theUnit === "°F";
  }



  //1. Redux-hooks
  const dispatch = useDispatch();
  const getOneAsync = (city) => dispatch(FetchOneAsync(city));
  const getOneAsyncImperial = (city) => dispatch(FetchOneAsyncImperial(city));

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <a className="navbar-brand" href="#">
        Weather App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/*Los links deben tener el href que indica a que archivo de la carpeta
            pages queremos ir (aqui vamos al home). La <a> va a contener la palabra
            que usamos como link*/}
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>

          <Link href="/test">
            <a className="nav-link">Daily</a>
          </Link>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={getWeatherInfo}>
          <input
            className={styles.inputStyle}
            type="text"
            name="city"
            placeholder="Search City..."
            aria-label="Search"
          />
          <button className={styles.btn} type="submit">
            Search
          </button>
          <div className={styles.unitStyle}>
            <h3>°F</h3>
            <Switch isOn={celsius} handleToggle={() => setCelsius(!celsius)} />
            <h3>°C</h3>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
