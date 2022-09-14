import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton from '@mui/material/IconButton';

function HelpButton({ message }) {
    const [anchor, setAnchor] = useState(null)

    return (
        <>
        <IconButton onClick={e => setAnchor(e.currentTarget)} >
            <HelpOutlineIcon fontSize='small' color='secondary' />
        </IconButton>
        <Menu
                id="menu-appbar"
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                open={Boolean(anchor)}
                onClose={() => setAnchor(null)}
                sx={{width: '70%', fontSize: 12, textAlign: 'center'}}
              >
                {message}
              </Menu>
        </>
    )
}

export default HelpButton