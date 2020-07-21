//Esta es una accion ASYNCRONA:
//Ejecuta una accion (llama a un api) y llama a una
//segunda accion (pasandole lo que recogio de la API)

import axios from "axios";
//Importamos la accion que queremos despachar al final
import FetchOneApi from './fetchOne';

const API_KEY = "35b09d50704a6a177c25bda05c32f780";

//Esta es una funcion asyncrona: es decir no solo ejecuta
//una accion (llamando a la primera api), sino que tambien despacha
//una segunda accion (fetchOneApi) pasando los valores
//obtuvo de la respuesta de esta API
export default function FetchOneAsync(city) {
    const request = axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${city}&appid=${API_KEY}&units=metric`
        );
        
    //Lo levantado por la API se llamara data.
    //Se dispara una accion llamada FETCH_WEATHER que de ser
    //admitida por el reducer modificara el state con lo que
    //contenga el payload: es decir data, es decir lo levantado
    //por la API
    return dispatch => {
        request.then(({data}) => {
            dispatch({type: "FETCH_WEATHER", payload: data})
            console.log(data)

            //Recogimos info de la API, le damos nombre y
            //despachamos una nueva accion, pasandole esos
            //valores
            const lat = data.coord.lat;
            const lon = data.coord.lon;
            console.log(lat);
            console.log(lon);
            dispatch(FetchOneApi(lat, lon))
        });
    };
}
