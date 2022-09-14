import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GameCardActions from "./GameCardActions";

function GameCard({ game }) {

    return (
        <Card sx={{ maxWidth: 300 }} >
            <CardMedia
            component='img'
            image={game.thumbnail}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" >
                    {game.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {game.short_description}
                </Typography>
            </CardContent>
            <GameCardActions game={game} />
        </Card>
    )
}

export default GameCard