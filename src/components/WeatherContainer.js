import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTemperature } from '../redux/temperature/Action'
const WeatherContainer = ({ tempData, fetchTemperature }) => {
    useEffect(() => {
        fetchTemperature()
    }, [fetchTemperature])
    return tempData.loading ? (
        <h1>Loading</h1>
    ) : tempData.error ? (
        <h1>{tempData.error}</h1>
    ) : (
        <h1>{(tempData.temperature - 273.15).toFixed(2)} Degree Celcius</h1>
    )
}
const mapStateToProps = state => {
    return {
        tempData: state.temperature
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTemperature: () => dispatch(fetchTemperature())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherContainer)