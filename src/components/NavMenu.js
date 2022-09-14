import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuList from "./MenuList";

function NavMenu() {
    const [showMenu, setMenu] = useState(false)

    return (
        <>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setMenu(!showMenu)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
          open={showMenu}
          onClose={() => setMenu(false)}
          >
            <MenuList onClickList={setMenu} />
          </Drawer>
          </>
    )
}

export default NavMenu