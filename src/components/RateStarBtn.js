import React from "react";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import IconButton from '@mui/material/IconButton';

function RateStarBtn({ filled, index, handleRating }) {
    return (
        <IconButton onClick={() => handleRating(index)} >
            {filled ? <StarRateIcon sx={{color: 'yellow'}} /> : <StarOutlineIcon sx={{color: 'yellow'}} />}
        </IconButton>
    )
}

export default RateStarBtn