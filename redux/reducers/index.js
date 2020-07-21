import {combineReducers} from 'redux';
import weatherInfo from '../reducers/weatherReducer';
import oneReducer from '../reducers/oneReducer';

//El rootReducer va a ser la suma de todos los reducer combinados

const rootReducer = combineReducers ({
    oneReducer,
    weatherInfo
});

export default rootReducer;