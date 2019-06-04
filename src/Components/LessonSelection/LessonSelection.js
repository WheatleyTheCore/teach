import React from 'react'
import Linkify from '../Utilities/Linkify';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const LessonSelection = (props) => {
    return (
        <div>
                    <SwipeableDrawer
                        anchor='bottom'
                        open={props.isOpen} //Here, we pass in wether or not the component is open as a prop. The prop passed in will be the isOpen state in the parent component, and so any change should trigger a rerender.
                    >{Linkify(props.list)}</SwipeableDrawer>
        </div>
    )
}

export default LessonSelection