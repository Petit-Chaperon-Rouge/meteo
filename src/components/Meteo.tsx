import React from 'react'

interface Props {
    weather: any
}

export const Meteo = (props: Props) => {
    return (
        <>
            <div>{props.weather.main.temp}</div>
        </>
    )
}