import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
import Avatar from '@mui/material/Avatar';

function GameReviewCard({ review }) {
    const stars = []

    for (let i = 0; i < review.rating; i++) {
        stars.push(i)
    }

    return (
        <Card sx={{maxWidth: 500, margin: '2rem', padding: '1rem'}} >
            <Avatar alt={review.user_username} src={review.user_avatar} sx={{bgcolor: 'white'}} />
            <Typography variant="h5">{review.user_full_name}</Typography>
            <br/>
            <Typography variant="h6">@{review.user_username}</Typography>
            <Typography variant="title">Tier: {review.user_tier}</Typography>
            <br/>
            <br/>
            <Typography variant="h6">Rating: {stars.map(star => <StarRateIcon sx={{color: 'yellow'}} key={star} />)}</Typography>
            <CardContent>
                <Typography variant="body">
                    {review.content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default GameReviewCard