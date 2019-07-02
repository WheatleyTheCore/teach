import React from "react"
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const Lesson = ({match}) => {
    let jsonFile = require(`../../Courses/${match.params.course}/lessons/${match.params.lesson}.json`)
   
    return (
        <div>
            <Paper>
                <Typography variant='h1'>
                    {jsonFile.title}
                </Typography>
                <Typography variant='body1'>
                    {jsonFile.lesson}
                </Typography>
            </Paper>
        </div>
    )
} 

export default Lesson