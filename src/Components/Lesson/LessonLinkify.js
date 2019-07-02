/*
    This function should take in an array of lesson names, and then use map to surround them in React Router Links. This is simmilar to what is done in NavList.js 
*/

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Link from 'react-router-dom/Link'


const LessonLinkify = (list, modifiedList, course) => {                  //creates list of router links
    return (
        <div>
            <List>
                {
                    list.map((text, index) => (  //iterates over array of link names to make a list of links
                        <Link to={`/${course}/` + 'lessons/' + modifiedList[index]} className='button'>
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

export default LessonLinkify
