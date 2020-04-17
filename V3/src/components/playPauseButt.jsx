import React from 'react'
// import { render } from '@testing-library/react';

const PlayPauseButt = props => {
    const { songs } = props;
    let audio = new Audio(songs.previewUrl)
    let playing = false

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
        <button type="button" data-testid="playPauseButt" className="playPauseButt" value={playing} props={props} onClick={playButtToggle}>PLAY</button>
    )
}

export default PlayPauseButt