import React from 'react';

const PlayPauseButt = ({ToggleButtFxn}) => {
    return (
        <button type="button" data-testid="playPauseButt" onClick={ToggleButtFxn} style={{backgroundColor: "black", display: "inline-block", borderColor: "rgb(255, 7, 58)"}} className="btn btn-info btn-lg">
            <span className="glyphicon glyphicon-play"></span>
        </button> 
    )
}

export default PlayPauseButt

