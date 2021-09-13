import React from 'react'
import { Meteo } from './Meteo'

interface Props {
    weather: any
}

export const MeteoList = (props: Props) => {
    return (
        <>
            <h1>{props.weather.city.name}</h1>
            {props.weather.list.map((l: any, index: number) =>
                <Meteo weather={l} key={index} />
            )}
        </>
    )
}