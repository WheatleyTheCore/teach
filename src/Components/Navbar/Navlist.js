import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Link from 'react-router-dom/Link'

const NavList = () => {                  //creates list of router links
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

export default NavList
