import React from 'react';
// import { render } from '@testing-library/react';

const PlayPauseButt = ({ToggleButtFxn}) => {
    // let { playButtToggle } = props
    return (
        <button type="button" data-testid="playPauseButt" onClick={ToggleButtFxn} style={{backgroundColor: "black", display: "inline-block", borderColor: "rgb(255, 7, 58)"}} className="btn btn-info btn-lg">
            <span className="glyphicon glyphicon-play"></span>
        </button> 
    )
}

export default PlayPauseButt

