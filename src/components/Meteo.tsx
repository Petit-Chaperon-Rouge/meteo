import React from 'react'

interface Props {
    weather: any
}

export const Meteo = (props: Props) => {
    return (
        <div className="card">
            <hr />
            <div>{props.weather.dt_txt}</div>
            <img src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} alt={props.weather.weather.description} />
            <div>{props.weather.weather[0].main} ({props.weather.weather[0].description})</div>
            <div>Température : {props.weather.main.temp}</div>
            <div>Température ressenti : {props.weather.main.temp}</div>
            <div>Température min: {props.weather.main.temp_min}</div>
            <div>Température max: {props.weather.main.temp_max}</div>
            <div>Vitesse du vent : {props.weather.wind.speed}</div>
            <div>Orientation du vent : {props.weather.wind.deg}</div>
        </div>
    )
}