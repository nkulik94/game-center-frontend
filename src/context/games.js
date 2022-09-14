import React, { useState, useEffect } from "react";

const GamesContext = React.createContext()

function GamesProvider({ children }) {
    const [games, setGames] = useState([])

    function getAndSetGames() {
        fetch('https://gamer-spot.up.railway.app/games')
            .then(r => r.json())
            .then(setGames)
    }

    useEffect(getAndSetGames, [])

    const gamesObj = {
        games,
        setGames,
        getAndSetGames
    }

    return <GamesContext.Provider value={gamesObj}>{children}</GamesContext.Provider>;
}

export { GamesContext, GamesProvider }