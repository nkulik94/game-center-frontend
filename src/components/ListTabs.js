import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import GameList from "./GameList";
import ReviewList from "./ReviewList";

function ListTabs() {
    const [value, setValue] = useState('0')
    const [searched, setSearched] = useState('')

    const userContext = useContext(UserContext)
    const likeList = userContext.likedGames
    const rateList = userContext.ratedGames
    const reviewList = userContext.reviewIds

    const filteredLikes = likeList.filter(game => game.title.toUpperCase().includes(searched.toUpperCase()))
    const filteredRates = rateList.filter(game => game.title.toUpperCase().includes(searched.toUpperCase()))
    return (
        <Box>
            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={(_, value) => setValue(value)} centered >
                        <Tab value='0' label="Likes" />
                        <Tab value='1' label='Ratings' />
                        <Tab value='2' label='Reviews' />
                    </TabList>
                </Box>
                <TabPanel value='0'>
                    <GameList games={filteredLikes} isMainList={false} searched={searched} setSearched={setSearched} />
                </TabPanel>
                <TabPanel value='1'>
                    <GameList games={filteredRates} isMainList={false} searched={searched} setSearched={setSearched} />
                </TabPanel>
                <TabPanel value='2'>
                    <ReviewList reviews={reviewList} />
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export default ListTabs