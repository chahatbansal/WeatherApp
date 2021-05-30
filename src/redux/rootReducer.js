import { combineReducers } from 'redux'
import temperatureReducer from './temperature/Reducer'
const rootReducer = combineReducers({
    temperature: temperatureReducer
})
export default rootReducer