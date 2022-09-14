import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import HelpButton from './HelpButton';
import Bio from './Bio';
import BioEdit from './BioEdit';
import AvatarEdit from './AvatarEdit';
import ListTabs from './ListTabs';

function ProfilePage() {

    const profile = useContext(UserContext).user
    const setUser = useContext(UserContext).setUser

    if (!profile) return null

    function handleEdit(body) {
        const config = {
            method: 'PATCH',
            headers: {
                "COntent-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch(`https://gamer-spot.up.railway.app/users/${profile.id}`, config)
        .then(r => {
            if (r.ok) {
                r.json().then(setUser)
            }
        })
    }

    const message = "User's tier is determined by how many games the user has reviewed"

    const helpButton = <HelpButton message={message} />

    return (
        <Container sx={{marginTop: '3%'}}>
            <Paper sx={{textAlign: 'center', color: '#e0e0e0'}}>
                <Typography variant='h3'>
                    {profile.full_name}
                </Typography>
                <Typography variant='h5' >
                    @{profile.username}
                </Typography>
                <br/>
                <Box>
                    <Avatar
                    sx={{width: '10%', height: '10%', margin: 'auto'}}
                    src={profile.avatar_url}
                    />
                    <Typography variant='caption'>
                        My Avatar
                    </Typography>
                    <br/>
                    <AvatarEdit handleEdit={handleEdit} avatar={profile.avatar_url} />
                </Box>
                <Typography variant='subtitle1'>
                    <Badge badgeContent={helpButton}>
                        <strong>GamerSpot Tier:</strong>
                    </Badge>
                    <br/>
                    {profile.tier}
                </Typography>
                {profile.bio ? <Bio bio={profile.bio} id={profile.id} handleEdit={handleEdit} /> : <BioEdit action={'Create Bio'} handleEdit={handleEdit} />}
                <ListTabs />
            </Paper>
        </Container>
    )
}

export default ProfilePage