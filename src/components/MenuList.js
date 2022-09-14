import React from "react";
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function MenuList({ onClickList }) {
    const options = ["Home", "Games", "Users", "Contact"]

    return (
        <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => onClickList(false)}
        >
            <List>
                {options.map(option => {
                    let link
                    switch (option) {
                        case 'Home':
                            link = "/";
                            break;
                        case "Games":
                            link ="/game-list/1";
                            break;
                        case "Users":
                            link = "/user-list";
                            break;
                        case "Contact":
                            link = "/contact"
                            break;
                        default:
                            link = null
                    }
                    return (
                        <ListItem key={option} disablePadding>
                            <ListItemButton component={Link} to={link} >
                                <ListItemText primary={option} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )
}

export default MenuList