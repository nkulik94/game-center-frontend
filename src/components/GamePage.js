import React, { useState, useContext } from "react";
import { GamesContext } from "../context/games";
import GameList from "./GameList";
import Container from '@mui/material/Container';

function GamePage() {
    const games = useContext(GamesContext).games
    const [searched, setSearched] = useState('')

    const filteredGames = games.filter(game => game.title.toUpperCase().includes(searched.toUpperCase()))

    return (
        <Container sx={{marginTop: '3%'}}>
            <GameList games={filteredGames} searched={searched} setSearched={setSearched} />
        </Container>
    )
}

export default GamePage