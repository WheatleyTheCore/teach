import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import './Home.css';



const Home = () => {
    return (
        <div>
            <Paper className='homePage'>
                <div className='pageContent'>
                    <Typography variant='h5' component='h3'>
                        Welcome
                    </Typography>
                    <br />
                    <Typography component='p' variant='body1'>
                        This site is to help keep you from failing. Our goal is to help you learn as <b>fast as possible</b>, so you ace that test.
                    </Typography>
                    <br />
                    <Typography component='h6' variant='body2'>
                        <sup>*This site is completely free to use, we hope it's helpful</sup>
                    </Typography>
                </div>                
            </Paper>
        </div>
    ) 
}

export default Home