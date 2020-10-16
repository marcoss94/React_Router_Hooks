import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'


function About() {
    const location = useLocation()
    const history = useHistory()
    console.log(history)

    function goBackHandle() {
        history.goBack();
    }

    return (
        <div>
            About
            <div>Location: {location.pathname}</div>
            <div>From: {location.state.from}</div>
            <button onClick={goBackHandle}>Go Back</button>

        </div>
    )
}

export default About
