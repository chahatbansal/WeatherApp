import {
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS,
    FETCH_TEMPERATURE_FAILURE
} from "./Types";

const initialState = {
    loading: false,
    temperature: '',
    error: ''
}
const tempratureReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEMPERATURE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TEMPERATURE_SUCCESS:
            return {
                loading: false,
                temperature: action.payload,
                error: ''
            }
        case FETCH_TEMPERATURE_FAILURE:
            return {
                loading: false,
                temperature: '',
                error: action.payload
            }
        default: return state
    }
}
export default tempratureReducer;