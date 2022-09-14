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


function SignUp() {
  const history = useHistory()

  const setUpUser = useContext(UserContext).setUpUser
  const user = useContext(UserContext).user

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        password_confirmation: ''
    })
    const [errors, setErrors] = useState(false)

    if (user) return <div></div>

    function handleErrors(errors) {
      setErrors(errors)
      setTimeout(() => setErrors(false), 4000)
    }

    function handleForm(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        fetch('https://gamer-spot.up.railway.app/signup', config)
        .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setUpUser(user)
            history.goBack()
          })
        } else {
          res.json().then(({ errors }) => handleErrors(errors))
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
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.first_name}
                  onChange={handleForm}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                  value={formData.last_name}
                  onChange={handleForm}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleForm}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleForm}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  autoComplete="new-password"
                  value={formData.password_confirmation}
                  onChange={handleForm}
                />
              </Grid>
            </Grid>
            {errors ? errors.map(error => <ErrorMsg error={error} key={error}/>) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}

export default SignUp