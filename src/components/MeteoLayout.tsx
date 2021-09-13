import React, { useState } from 'react'
import { MeteoList } from './MeteoList'
import { SearchBar } from './SearchBar'

export const MeteoLayout = () => {

    const [weather, setWeather] = useState({})


    return (
        <div className="main-container">
            <SearchBar toFinish={setWeather} />
            <div>
                {Object.keys(weather).length
                    ? <MeteoList weather={weather} />
                    : ""
                }
            </div>
        </div>
    )
}