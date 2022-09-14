import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BioEdit from "./BioEdit";

function Bio({ bio, handleEdit }) {
    return (
        <Box>
            <Typography variant="h6">Bio:</Typography>
            <Typography variant='body'>
                {bio}
            </Typography>
            <br/>
            <BioEdit bio={bio} action={'Edit'} handleEdit={handleEdit} />
        </Box>
    )
}

export default Bio