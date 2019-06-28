import React from "react"
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const Lesson = (props) => {
    return (
        <div>
            <Paper>
                <Typography variant='h1'>
                    {props.title}
                </Typography>
                <Typography variant='body1'>
                    {props.lesson}
                </Typography>
            </Paper>
        </div>
    )
} 

export default Lesson