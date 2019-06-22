import React from 'react'
import WelcomeCard from '../../../Components/WelcomeCard/WelcomeCard'

/*
 * A welcome for the chemistry section.
 */

const ChemWelcome = () => {  
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

    let list = [0, 1, 2]
    let body = 'Welcome to the Chemistry section. This is a collection of many of the topics\
                you would likely see in a High School Chemistry class.'
    return (
        <div onClick={() => resetDrawer()}>
            <WelcomeCard course='Chemistry' body={body} list={list} />
        </div>
    ) 
}

export default ChemWelcome