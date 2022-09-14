import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function UserCard({ user }) {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardContent>
                <Avatar alt={user.full_name} src={user.avatar_url} sx={{bgcolor: 'white', width: 'fit-content', margin: 'auto'}} />
                <Typography variant='h5'>{user.full_name}</Typography>
                <Typography variant="h6">@{user.username}</Typography>
                <Typography variant="title">Tier: {user.tier}</Typography>
                <br/>
                <span><Typography variant="title">{user.like_count} </Typography><FavoriteIcon sx={{color: 'red'}} /></span>
                <br/>
                <span><Typography variant="title">{user.rate_count} </Typography><StarRateIcon sx={{color: 'yellow'}} /></span>
                <br/>
                <span><Typography variant="title">{user.review_count} </Typography><ChatBubbleIcon /></span>
                <br/>
                <br/>
                <Typography variant="title"><strong>Bio:</strong></Typography>
                <br/>
                <Typography variant='body'>{user.bio}</Typography>
            </CardContent>
        </Card>
    )
}

export default UserCard