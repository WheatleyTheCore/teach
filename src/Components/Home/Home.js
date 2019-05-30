import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Link from 'react-router-dom/Link'
import './Home.css'

const Home = () => {
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
            <Button onClick={toggleDrawer}>open</Button>
            <div>hi</div>
            <SwipeableDrawer
                anchor='left'
                open={state.isOpen}
                onOpen={toggleDrawer}
                onClose={toggleDrawer}>{navList()}</SwipeableDrawer>
        </div>
    )
}

export default Home