import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import GameCardActions from "./GameCardActions";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import GameTabs from "./GameTabs";

function DetailedGame() {
    const id = useParams().gameId
    const [game, setGame] = useState(null)

    function getGame(id) {
        fetch(`https://gamer-spot.up.railway.app/games/${id}`)
            .then(r => r.json())
            .then(setGame)
    }

    useEffect(() => getGame(id), [id])
    
    if (!game) return <div></div>

    return (
        <Container maxWidth="lg" sx={{marginTop: '3%'}}>
            <Paper sx={{color: '#e0e0e0', overflow: 'auto', padding: 3}}>
                <Card sx={{maxWidth: 800, margin: 'auto', padding: '2rem'}} >
                    <Typography variant="h4" sx={{width: 'fit-content', margin: 'auto', marginBottom: '1rem'}}>{game.title}</Typography>
                    <CardMedia
                    component='img'
                    image={game.thumbnail}
                    sx={{width: '80%', margin: 'auto'}}
                    />
                    <CardContent>
                        <GameCardActions game={game} setDetailed={getGame} reviewList={game.reviews} />
                        <Box sx={{lineHeight: '2rem'}} >
                            <Typography variant="subtitle"><strong>Platform:</strong> {game.platform}</Typography>
                            <br/>
                            <Typography variant="subtitle"><strong>Genre:</strong> {game.genre}</Typography>
                            <br/>
                            <Typography><strong>Game Link:</strong> <Link href={game.game_url} >{game.game_url}</Link></Typography>
                        </Box>
                        <Typography variant="body" ><strong>Description:</strong> {game.description}</Typography>
                        <Box sx={{lineHeight: '2rem'}} >
                            <Typography variant="subtitle" ><strong>Developer:</strong> {game.developer}</Typography>
                            <br/>
                            <Typography variant="subtitle"><strong>Publisher:</strong> {game.publisher}</Typography>
                            <br/>
                            <Typography variant="subtitle"><strong>Release Date:</strong> {game.release_date}</Typography>
                        </Box>
                    </CardContent>
                </Card>
                <GameTabs game={game}/>
            </Paper>
        </Container>
    )
}

export default DetailedGame