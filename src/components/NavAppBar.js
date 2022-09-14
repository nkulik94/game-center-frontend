import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavMenu from './NavMenu';
import ProfileMenu from './ProfileMenu';

function NavAppBar() {
  const user = useContext(UserContext).user

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavMenu />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gamer Spot
          </Typography>
          {user ? <ProfileMenu avatar={user.avatar_url} /> : <Button component={Link} to="/sign-in" color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavAppBar