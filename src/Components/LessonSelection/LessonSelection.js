import React from 'react'
import LessonLinkify from '../Lesson/LessonLinkify'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const LessonSelection = (props) => {
    let list = props.list;
    let modifiedList = [];
    list.forEach((item) => {
        let modifiedItem = item.replace(" ", "_")
        modifiedList.push(modifiedItem)
    })
    return (
        <div>
                    <SwipeableDrawer
                        anchor='bottom'
                        open={props.isOpen} //Here, we pass in wether or not the component is open as a prop. The prop passed in will be the isOpen state in the parent component, and so any change should trigger a rerender.
                    >{LessonLinkify(props.list, modifiedList, props.course)}</SwipeableDrawer>
        </div>
    )
}

export default LessonSelection