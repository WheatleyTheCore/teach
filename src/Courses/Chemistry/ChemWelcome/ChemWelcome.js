import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import LessonSelection from '../../../Components/LessonSelection/LessonSelection';
/**
 * A welcome for the chemistry section.
 * ANY welcome should include the following:
 *  -A description
 *  -How to view the lessons
 *  -The lessons 
 */

const ChemWelcome = () => {  
    const [state, setState] = React.useState({
        isOpen: false
    })

    const toggleDrawer = () => {             //function for toggling wether or not drawer is open
        setState({ isOpen: !state.isOpen })
        console.log(state.isOpen)
    }

    const resetDrawer = () => {
        if (state.isOpen) toggleDrawer()
    }

    let list = [0, 1, 2]

    return (
        <div onClick={() => resetDrawer()}>
            <Paper className='homePage'>
                <div className='pageContent'>
                    <Typography variant='h5' component='h3'>
                        Welcome to Chemistry
                    </Typography>
                    <br />
                    <Typography component='p' variant='body1'>
                        This will cover many topics that are taught in a typical High School Chemisty class.
                        It may not include the specific topic you are looking for. In the event that
                        that happens, please contact us and we'll get on it as quickly as we can!
                    </Typography>
                    <br />
                    <Button variant='outlined' color='primary' onClick={() => {
                        toggleDrawer()
                    }}>
                        See our Lessons
                    </Button>
                    <LessonSelection list={list} isOpen={state.isOpen} />
                </div>
            </Paper>
        </div>
    ) 
}

export default ChemWelcome