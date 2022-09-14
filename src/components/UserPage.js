import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import UserList from './UserList';

function UserPage() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (users.length === 0) {
            fetch('https://gamer-spot.up.railway.app/users')
                .then(r => r.json())
                .then(setUsers)
        }
    }, [users])

    return (
        <Container sx={{marginTop: '3%'}}>
            <UserList users={users} />
        </Container>
    )
}

export default UserPage