import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import './Navbar.css';
import Linkify from '../Utilities/Linkify';


 
const Navbar = () => {
    const [state, setState] = React.useState({
        isOpen: false                          //state that determines if drawer is open
    })
    const toggleDrawer = () => {             //function for toggling wether or not drawer is open
        setState({ isOpen: !state.isOpen })
        console.log(state.isOpen)
    }

    let list = ['Chemistry', 'Latin', 'Math']

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu" onClick={() => {
                        toggleDrawer()
                    }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6'><div className='title'>Don't Panic</div></Typography>
                    <SwipeableDrawer
                        anchor='left'
                        open={state.isOpen}
                        onOpen={toggleDrawer}
                        onClose={toggleDrawer}>{Linkify(list)}</SwipeableDrawer>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar