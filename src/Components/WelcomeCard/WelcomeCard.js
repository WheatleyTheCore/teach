import React from 'react'	
import Paper from '@material-ui/core/Paper'	
import Typography from '@material-ui/core/Typography';	
import Button from "@material-ui/core/Button";	
import LessonSelection from '../LessonSelection/LessonSelection';	

 /**	
 * This is a reusable welcome component, for the 'home' page of each course	
 * 	
 * ANY welcome should include the following:	
 *  -A description	
 *  -How to view the lessons	
 *  -The lessons 	
 */	

 const WelcomeCard = (props) => {	
    const [state, setState] = React.useState({	
        isOpen: false	
    })	

     const toggleDrawer = () => {             //function for toggling wether or not drawer is open	
        setState({ isOpen: !state.isOpen })	
        console.log(state.isOpen)	
    }	

     const resetDrawer = () => {           //If user clicks anywhere other than a link, drawer closes	
        if (state.isOpen) toggleDrawer()	
    }	

    let course = props.match.params.course

    let manifest = require(`../../Courses/${course}/manifest.json`)

     return (	
        <div onClick={() => resetDrawer()}>	
            <Paper className='homePage'>	
                <div className='pageContent'>	
                    <Typography variant='h5' component='h3'>	
                        Welcome to {course}	
                    </Typography>	
                    <br />	
                    <Typography component='p' variant='body1'>	
                        {manifest.welcome}	
                    </Typography>	
                    <br />	
                    <Button variant='outlined' color='primary' onClick={() => {	
                        toggleDrawer()	
                    }}>	
                        See our Lessons	
                    </Button>	
                    <LessonSelection list={manifest.lessons} isOpen={state.isOpen} course={course} />	
                </div>	
            </Paper>	
        </div>	
    )	
}	

 export default WelcomeCard 	
