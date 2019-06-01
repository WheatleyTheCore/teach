import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Link from 'react-router-dom/Link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import './Navbar.css'


 
const Navbar = () => {
    const [state, setState] = React.useState({
        isOpen: false                          //state that determines if drawer is open
    })
    const toggleDrawer = () => {             //function for toggling wether or not drawer is open
        setState({ isOpen: !state.isOpen })
        console.log(state.isOpen)
    }

    const navList = () => {                  //creates list of router links
        return (
            <div>
                <List>
                    {
                        ['asdf', 'fda', 'hello'].map((text) => (  //iterates over array of link names to make a list of links
                            <Link to={'/' + text} className='button'>
                                <ListItem button key={text}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            </Link>
                        ))
                    }
                </List>
            </div>
        )
    }

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
                        anchor='top'
                        open={state.isOpen}
                        onOpen={toggleDrawer}
                        onClose={toggleDrawer}>{navList()}</SwipeableDrawer>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar