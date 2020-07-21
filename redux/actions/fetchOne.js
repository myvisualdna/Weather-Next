import axios from "axios";

//Definimos el API KEY que necesitamos
const API_KEY = "35b09d50704a6a177c25bda05c32f780";
//Exportamos el type
export const FETCH_ONE = 'FETCH_ONE';

//Definimos el action creator y le pasamos city
//FirstFetch le esta enviando lat y lon, entonces aqui lo incluimos como parametro recibido
export default function FetchOneApi(lat, lon) {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}&units=metric`
        );
        

    //Lo levantado por la API se llamara data.
    //Se dispara una accion llamada FETCH_WEATHER que de ser
    //admitida por el reducer modificara el state con lo que
    //contenga el payload: es decir data, es decir lo levantado
    //por la API
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({type: "FETCH_ONE", payload: data})
            console.log(data);
        });
    };
}

