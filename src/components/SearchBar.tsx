import React, { useState } from 'react'
import { meteoService } from '../services/MeteoHttpService';

interface Props {
    toFinish: any
}

export const SearchBar = (props: Props) => {

    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState("");

    const search = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            meteoService.findDaily(query).then(setWeather);
            setQuery("");
            props.toFinish(weather);
            console.log(weather);
        }
    }

    return (
        <div className="search-bar-container">
            <input type="text" className="search-bar" value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => search(e)} placeholder="Choisissez une ville" />
        </div>
    )
}