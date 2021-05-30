import axios from 'axios'
import {
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS, 
    FETCH_TEMPERATURE_FAILURE
} from './Types'

export const fetchTemperatureRequest = () => {
    return {
        type: FETCH_TEMPERATURE_REQUEST
    }
}

export const fetchTemperatureSuccess = temperature => {
    return {
        type: FETCH_TEMPERATURE_SUCCESS,
        payload: temperature
    }
}

export const fetchTemperatureFailure = error => {
    return {
        type: FETCH_TEMPERATURE_FAILURE,
        payload: error
    }
}

export const fetchTemperature = () => {
    return (dispatch) => {
        dispatch(fetchTemperatureRequest())
        axios
        .get(`http://api.openweathermap.org/data/2.5/weather?lat=28.8386&lon=78.7733&appid=9a9f0de9ed61cf61824fa8a7ccf371a6`)
        .then(respose => {
             const temperature = respose.data.main.temp
             dispatch(fetchTemperatureSuccess(temperature))
         })
         .catch(error => {
             const errorMsg = error.message
             dispatch(fetchTemperatureFailure(errorMsg))
         })
    }
}