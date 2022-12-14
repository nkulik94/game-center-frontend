import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ErrorMsg from './ErrorMsg';



function SignIn() {
  const history = useHistory()

  const setUpUser = useContext(UserContext).setUpUser
  const user = useContext(UserContext).user
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  if (user) return <div></div>

  function handleForm(e) {
    e.preventDefault()
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleError(error) {
    setError(error)
    setTimeout(() => setError(false), 3000)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const config ={
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    }
    fetch('https://gamer-spot.up.railway.app/login', config)
    .then(res => {
      if (res.ok) {
        res.json().then(user => {
          setUpUser(user)
          history.goBack()
        })
      } else {
        res.json().then(handleError)
      }
    })
  }

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <SportsEsportsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              value={formData.username}
              onChange={handleForm}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleForm}
            />
            {error ? <ErrorMsg error={error.error} /> : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link component={RouterLink} to="/create-account" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}

export default SignIn