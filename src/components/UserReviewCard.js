import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { UserContext } from "../context/user";
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import StarRateIcon from '@mui/icons-material/StarRate';
import CardMedia from '@mui/material/CardMedia';
import RateDialog from "./RateDialog";
import Button from '@mui/material/Button';
import ReviewDialog from "./ReviewDialog";

function UserReviewCard({ review }) {
    const userContext = useContext(UserContext)
    const [openRate, setOpenRate] = useState(false)
    const [openReview, setOpenReview] = useState(false)
    let stars = []

    for (let i = 0; i < review.rating; i++) {
        stars.push(i)
    }



    function updateListForAttribute(game, updatedGame, attribute) {
        game[attribute] = game.id === updatedGame.id ? updatedGame[attribute] : game[attribute]
        return game
    }

    return (
        <Card sx={{maxWidth: 500, margin: '2rem', padding: '1rem'}}>
            <Typography variant="h5">{review.game}</Typography>
            <br/>
            <CardMedia
            component='img'
            image={review.thumbnail}
            />
            <Typography variant="h6">My Rating: {stars.map(star => <StarRateIcon sx={{color: 'yellow'}} key={star} />)}</Typography>
            <CardContent>
                <Typography variant="body">
                    {review.content}
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonGroup>
                    <Button onClick={() => setOpenRate(true)} >Change Rating</Button>
                    <Button onClick={() => setOpenReview(true)}>Edit/Delete Review</Button>
                    <Button component={Link} to={`/game-details/${review.game_id}`}>View Game</Button>
                </ButtonGroup>
            </CardActions>
            <RateDialog
                open={openRate}
                setOpen={setOpenRate}
                gameId={review.game_id}
                updateLists={updateListForAttribute}
                liked={userContext.likedIds[review.gameId]}
            />
            <ReviewDialog
                open={openReview}
                setOpen={setOpenReview}
                gameId={review.game_id}
            />
        </Card>
    )
}

export default UserReviewCard