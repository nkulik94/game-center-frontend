import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UserCard from './UserCard';

function UserList({ users }) {

    return (
        <Paper sx={{textAlign: 'center', color: '#e0e0e0'}}>
            <Grid sx={{width: 'fit-content', margin: 'auto'}} container spacing={2} >
                {users.map(user => {
                    return (
                        <Grid sx={{width: 'fit-content', margin: 'auto'}} item key={user.id} >
                            <UserCard user={user} />
                        </Grid>
                    )
                })}
            </Grid>
        </Paper>
    )
}

export default UserList