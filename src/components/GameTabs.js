import React, { useState } from "react";
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import ReviewList from "./ReviewList";
import UserList from "./UserList";

function GameTabs({ game }) {
    const [value, setValue] = useState('0')

    return (
        <Box>
            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={(_, value) => setValue(value)} centered >
                        <Tab value='0' label="Reviews" />
                        <Tab value='1' label='Liked By' />
                    </TabList>
                </Box>
                <TabPanel value='0'>
                    <ReviewList reviews={game.reviews} />
                </TabPanel>
                <TabPanel value='1'>
                    <UserList users={game.liking_users} />
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export default GameTabs