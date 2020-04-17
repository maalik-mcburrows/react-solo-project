import React from 'react'
// import { render } from '@testing-library/react';

const PlayPauseButt = props => {
    const { songs } = props;
    let audio = new Audio(songs.previewUrl)
    let playing = false
    // let buttStatus = 'PLAY'
    const playButtToggle = () => {

        if (playing) {
            playing = false
            audio.pause()
            // buttStatus = 'PLAY'
        } else {
            playing = true
            audio.play()
            // buttStatus = 'PAUSE'
        }
        console.log('Toggle value: ', playing)
    }
    return (
<button type="button" data-testid="playPauseButt" value={playing} onClick={playButtToggle} style={{backgroundColor: "black", display: "inline-block", borderColor: "rgb(255, 7, 58)"}} className="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-play"></span>
        </button> 
           )
}

export default PlayPauseButt

