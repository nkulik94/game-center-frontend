import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

function Home() {
    const setUpUser = useContext(UserContext).setUpUser
    const user = useContext(UserContext).user
    const [isLoggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if (user && !isLoggedIn) {
            setLoggedIn(true)
        }
        if (!user && isLoggedIn) {
            setLoggedIn(false)
        }
    }, [user])

    function handleLogIn() {
        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: 'QB1', password: 'ljera'})
        }
        fetch('https://gamer-spot.up.railway.app/login', config)
        .then(r => r.json())
        .then(setUpUser)
    }
    return (
        <Container sx={{marginTop: '3%'}}>
            <Paper sx={{textAlign: 'center', color: '#e0e0e0', padding: 5}}>
                <Typography variant="h2">Gamer Spot</Typography>
                <Typography variant="h6" >All game information obtained via the <Link href='https://www.freetogame.com/api-doc'>Freetogame</Link> API</Typography>
                <Typography variant="body">Welcome to Gamer Spot! Here users can browse free online games, as well as like, rate, or review them. This website was developed as a software engineering project. Feel free to browse around, but keep in mind that most of the users and their associated information (likes, reviews, ratings) have been randomly generated and are essentially meaningless. Additionally, as this is a demo app, it's quite possible that some tinkering by our developer may result in the loss of your account (particularly in the event that the database table rows exceed Heroku's limit for a free app). To fully explore the site without creating an account, click on the button below to be logged in as an existing user. Please be considerate and don't modify the demo account profile (liking, rating, and reviewing games is fine). (Give it a second, it's not as as fast as I'd like it to be)</Typography>
                <br/>
                {isLoggedIn ? <Typography variant="title">You are logged in!</Typography> : <Button variant='outlined' onClick={handleLogIn}>Log In As Demo User</Button>}
            </Paper>
        </Container>
    )
}

export default Home