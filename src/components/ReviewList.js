import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import GameReviewCard from './GameReviewCard';
import Typography from '@mui/material/Typography';
import UserReviewCard from './UserReviewCard';
import SimplePageButtons from './SimplePageButtons';

function ReviewList({ reviews }) {
    const [listedReviews, setList] = useState([])
    const [pageCount, setPageCount] = useState(0)

    const list = Array.isArray(reviews) ? reviews.map(review => <GameReviewCard review={review} key={review.id} />) : Object.keys(reviews).map(key => <UserReviewCard review={reviews[key]} key={key} />)

    useEffect(() => {
        setPageCount(Math.ceil(list.length / 8))
        setList(list.slice(0, 8))
    }, [reviews])
    return (
        <>
        <Paper sx={{color: '#e0e0e0', width: 'fit-content', margin: 'auto', padding: '2rem', backgroundColor: 'khaki'}}>
            <Typography variant='h2' sx={{color: 'black'}}>Reviews:</Typography>
            {listedReviews}
        </Paper>
        <SimplePageButtons setList={setList} listItems={list} pageSize={8} count={pageCount} />
        </>
    )
}

export default ReviewList